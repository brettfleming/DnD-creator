const router = require("express").Router();
const { Character, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

//get user information

//get profile information



//edit charecter information

router.put("/edit/:id", withAuth, async (req, res) =>{
    try {
        const charecterData = await Character.findOne(
            {
                where: {
                    id: req.params.id
                },
                attributes: [ 
                    "character_name",
                    "character_background", 
                    "character_race", 
                    "character_alignment",
                    "character_class", 
                    "str", 
                    "dex", 
                    "chr", 
                    "cons",
                    "int",
                    "wis"
                    ],

                include: [
                    {
                    model: User, attributes: ["user_name"]
                    }
                ]
            }
        )
        res.status(200).json(charecterData)

    } catch (err) {
        res.status(400).json(err)
    }
})
