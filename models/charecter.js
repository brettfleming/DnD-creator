const {Model, DataTypes} =require("sequelize");
const sequelize = require("../config/connection");

class Charecter extends Model {}

Charecter.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        cahrecter_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        background: {
            type: DataTypes.STRING
        },
        race: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alignment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        class: {
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
        modelName: "charecter",
        }
);

module.exports = Charecter