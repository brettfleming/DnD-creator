const {Model, DataTypes} =require("sequelize");
const sequelize = require("../config/connection");


class  Character extends Model {}

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

module.exports =   Character
