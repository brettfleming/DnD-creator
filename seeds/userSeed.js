const { User } = require("../models");


const userData = [
    {
        user_name: "cWoodson",
        user_email: "cw@ohiostatemustbedestroyed.org",
        user_password: "Woodson1234"
    },
    {
        user_name: "jharbaugh",
        user_email: "jh@ohiostatemustbedestroyed.org",
        user_password: "harbaugh1234"
    },
    {
        user_name: "bSchembechler",
        user_email: "bs@ohiostatemustbedestroyed.org",
        user_password: "Schembechler"
    },
    {
        user_name: "tBrady",
        user_email: "td@ohiostatemustbedestroyed.org",
        user_password: "Brady1234"
    },
    {
        user_name: "dHoward",
        user_email: "dh@ohiostatemustbedestroyed.org",
        user_password: "Howard1234"
    },
    {
        user_name: "tBiakabatuka",
        user_email: "fds@ohiostatemustbedestroyed.org",
        user_password: "Biakabatuka1234"
    },
    {
        user_name: "dRobinson",
        user_email: "dr@ohiostatemustbedestroyed.org",
        user_password: "Robinson1234"
    },
    {
        user_name: "gFord",
        user_email: "gf@ohiostatemustbedestroyed.org",
        user_password: "Ford1234"
    },
    {
        user_name: "tHarmon",
        user_email: "th@ohiostatemustbedestroyed.org",
        user_password: "Harmon1234"
    },
    {
        user_name: "dDierdorf",
        user_email: "dd@ohiostatemustbedestroyed.org",
        user_password: "Dierdorf1234"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;