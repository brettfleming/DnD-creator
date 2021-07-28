const seedUsers = require("./userSeed");
const seedCharacters = require("./characterSeed");
const seedComments = require("./commentsSeed");

const sequelize = require("../config/connection");


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n---- DATABASE SYNCED ----\n");
    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");
    await seedCharacters();
    console.log("\n----- CHARACTERS SEEDED -----\n");
    await seedComments();
    console.log("\n----- COMMENTS SEEDED -----\n");

    process.exit(0);
};
exports.module = seedAll;
// seedAll();
