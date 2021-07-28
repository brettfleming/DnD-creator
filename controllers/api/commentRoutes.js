const router = require("express").Router();
const {  Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");


router.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll();
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.get("/:id", async (req, res) => {
    try {
        const commentData = await Comment.findAll(
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).json(commentData);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.post('/', withAuth, async (req, res) => {
    console.log("comment data", req.body);
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
<<<<<<< HEAD
=======
            // comment_id: req.session.comment_id,
>>>>>>> origin
        });
        console.log(newComment);
        res.status(200).json(newComment);
        
    } catch (err) { console.log(err)
        res.status(400).json(err);
    }
});

module.exports = router;