const seedMaps = require('./maps');
const sequelize = require('../config/connection');

const seed = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedMaps();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    process.exit(0);
};

seed();