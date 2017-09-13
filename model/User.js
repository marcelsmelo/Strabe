const Sequelize = require('sequelize')
const sequelize = require('../config/db');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: Sequelize.STRING
    },

    lastName: {
        type: Sequelize.STRING
    }
});

module.exports = User;