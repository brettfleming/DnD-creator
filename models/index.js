const Charecter = require("./charecter");
const Comment = require("./comment");
const User = require("./user");

User.hasMany(Charecter, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Charecter.belongsTo(User, {
    foreignKey: "user_id"
});

Charecter.hasMany(Comment, {
    foreignKey: "charecter_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

Comment.belongsTo(Charecter, {
    foreignKey: "charecter_id"
});

module.exports = {Charecter, Comment, User}