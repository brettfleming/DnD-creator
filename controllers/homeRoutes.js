const router = require('express').Router();
const { Character, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const characterData = await Character.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
        // {
        //   model: Comment,
        //   attributes: ["comment_text"]
        // }
      ],

    });
    console.log( characterData)
    
    const characters = characterData.map((character) => character.get({ plain: true }));
    console.log(characters)
    res.render('homepage', { 
      characters, 
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
        // {
        //   model: Comment,
        //   attributes: ["comment_text"]
        // }
      ],
    });

    const character = characterData.get({ plain: true });

    res.render('character', {
      ...character,
      logged_in: req.session.logged_in
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
    res.render('create');
    return;
})

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
