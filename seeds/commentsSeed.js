const { Comment } = require("../models");

const commentData = [
    {
        user_id: 5,
        comment_text: "Yer character sux dood.",
        character_id: 7
    },
    {
        user_id: 5,
        comment_text: "I like yer character. Ima subscribe to yer newzletter.",
        character_id: 4
    },
    {
        user_id: 2,
        comment_text: "I don't think the words you use mean what you think they mean.",
        character_id: 2
    },
    {
        user_id: 8,
        comment_text: "I hate your dumb face.",
        character_id: 8
    },
    {
        user_id: 9,
        comment_text: "Your character rulez hollywood mah brutha.",
        character_id: 9
    },
    {
        user_id: 1,
        comment_text: "I coulda' done better in my sleep. When I was five.",
        character_id: 1
    },
    {
        user_id: 1,
        comment_text: "Use better colors. These ones are lame.",
        character_id: 5
    },
    {
        user_id: 10,
        comment_text: "Screw that guy; yer colors are way better than anything THAT guy coulda' come up with.",
        character_id: 5
    },
    {
        user_id: 1,
        comment_text: "Hey! Screw you too buddy!",
        character_id: 5
    },
    {
        user_id: 10,
        comment_text: "Yo mama.",
        character_id: 5
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;