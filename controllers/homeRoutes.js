const router = require('express').Router();
const { Character, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
  try {
    
    let characterData = await Character.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
        {
          model: Comment,
          attributes: ["comment_text"]
        }
      ],

    });
    
    const character = characterData.map((character) => character.get({ plain: true }));
    if(character[0]) {
      console.log(character[0].comments);
    } else {
      console.log('comment does not exist');
    }
  
    res.render('homepage', { 
      character, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/character/:id', async (req, res) => {
  try {
    const characterData = await Character.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
        {
          model: Comment,
          attributes: ["comment_text"]
        }
      ],
    });

    const character = characterData.get({ plain: true });
    console.log(character);
    res.render('character', {
      ...character,
      logged_in: req.session.logged_in,
      logged_in_id: req.session.user_id
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Character }],
    });

    const user = userData.get({ plain: true });
    // console.log(user)

    // const newUserData = {...user.characters[0]}
    // console.log(newUserData)
    // newUserData.user_name = user.user_name
    req.session.save(() => {
      req.session.character_name = userData.character_name
    })
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/create', (req, res) => {
    res.render('create', {
      logged_in: req.session.logged_in
    });
    return;
})
router.get('/monster', (req, res) => {
    res.render('monsterSearch', {
      logged_in: req.session.logged_in
    });
    return;
})
router.get('/monster/:monsterName', async (req, res) => {
    let monsterData = await fetch(`https://www.dnd5eapi.co/api/monsters/${req.params.monsterName}`)
    monsterData = await monsterData.json();
    console.log(monsterData);

    //modify object data as needed before sending into handlebars
    monsterData.condition_immunities = monsterData.condition_immunities.reduce((finalStr, inputObj) => {
      return finalStr += `${inputObj.name}, `
    }, "")
    monsterData.condition_immunities = monsterData.condition_immunities.slice(0, monsterData.condition_immunities.length - 2);
    
    monsterData.damage_immunities = monsterData.damage_immunities.reduce((finalStr, inputStr) => {
      return finalStr += `${inputStr}, `
    }, "")
    monsterData.damage_immunities = monsterData.damage_immunities.slice(0, monsterData.damage_immunities.length - 2);
    
    monsterData.damage_resistances = monsterData.damage_resistances.reduce((finalStr, inputStr) => {
      return finalStr += `${inputStr}, `
    }, "")
    monsterData.damage_resistances = monsterData.damage_resistances.slice(0, monsterData.damage_resistances.length - 2);
    
    monsterData.damage_vulnerabilities = monsterData.damage_vulnerabilities.reduce((finalStr, inputStr) => {
      return finalStr += `${inputStr}, `
    }, "")
    monsterData.damage_vulnerabilities = monsterData.damage_vulnerabilities.slice(0, monsterData.damage_vulnerabilities.length - 2);

    res.render('monster', { 
      ...monsterData, 
      logged_in: req.session.logged_in
    });
    return;
});
router.get('/update/:id', async (req, res) => {
  try {
    const characterData = await Character.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user_name'],
        }
      ],
    });

    const character = characterData.get({ plain: true });
    console.log(character);
    res.render('update', {
      ...character,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
