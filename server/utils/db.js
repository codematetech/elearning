const { Sequelize } = require("sequelize");

const sequalize = new Sequelize('database', 'user', 'password',{
    dialect: 'sqlite',
    host: './database.sqlite'
});
module.exports = sequalize