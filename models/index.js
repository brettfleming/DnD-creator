const Character = require("./character");
const Comment = require("./comment");
const User = require("./user");

User.hasMany(Character, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Character.belongsTo(User, {
    foreignKey: "user_id"
});

Character.hasMany(Comment, {
    foreignKey: "Character_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

Comment.belongsTo(Character, {
    foreignKey: "Character_id"
});

module.exports = {Character, Comment, User}