const Sequelize = require('sequelize');
const pg = require('pg');

const sequelize = new Sequelize('oblivio', 'DanielBConcordia', 'V8GHho5DtNJv', {
    host: "ep-young-math-99091305.us-east-2.aws.neon.tech",
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

modules.exports = {
    Sequelize, sequelize
}
