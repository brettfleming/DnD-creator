const router = require('express').Router();
const { Character, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/:id', async (req, res) => {
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
    res.json(character)
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.post('/create', withAuth, async (req, res) => {
  console.log(req.body)
    try {
        const newCharacter = await Character.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newCharacter);
        
    } catch (err) {
        res.status(400).json(err);
    }
});
router.put('/update/:id', withAuth, async (req, res) => {
  console.log(req.params.id);
  try {
    const newCharacterdata = await Character.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    console.log(newCharacterdata)
    res.status(200).json(newCharacterdata);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }

})

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const characterData = await Character.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!characterData) {
        res.status(404).json({ message: 'No character found with this id!' });
        return;
      }
  
      res.status(200).json(characterData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
