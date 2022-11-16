require('dotenv').config();

module.exports = {
    DB_SECRET: process.env.DB_SECRET,
    PORT: process.env.PORT || 3000
}