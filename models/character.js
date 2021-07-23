const {Model, DataTypes} =require("sequelize");
const {  Character } = require(".");
const sequelize = require("../config/connection");

<<<<<<< HEAD:models/charecter.js
class  Character extends Model {}
=======
class Character extends Model {}
>>>>>>> 54e7e2646e45ca3ace96588a03b1a4dd321fa74b:models/character.js

Character.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        character_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        character_background: {
            type: DataTypes.STRING
        },
        character_race: {
            type: DataTypes.STRING,
            allowNull: false
        },
        character_alignment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        character_class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        str: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dex: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        chr: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cons: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        int: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        wis: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "character",
        }
);

<<<<<<< HEAD:models/charecter.js
module.exports =   Character
=======
module.exports = Character
>>>>>>> 54e7e2646e45ca3ace96588a03b1a4dd321fa74b:models/character.js
