const router = require('express').Router();
const { User, Character } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    console.log(req.body)
    try{
        const userData = await User.create(req.body);


        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
});

router.get("/profile", withAuth, async (req, res) => {
    try {
        const userData = await user.findAll({
            include: [
                {
                    model: Character,
                    attributes: 
                        [ "character_name",
                            "character_background",
                            "character_race",
                            "character_alignment",
                            "character_class",
                            "str",
                            "dex",
                            "chr",
                            "cons",
                            "int",
                            "wis",
                            "user_id" 
                        ],
                    
                },
            ],
        });
        const users = userData.map((user) => character.get({ plain: true }));
        res.json({ users: users })
    } catch (err) {
        res.status(500).json(err)
    }
})
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { user_email: req.body.email } });
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        console.log(validPassword)
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            
            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
        res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
  
  module.exports = router;