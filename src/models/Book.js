const Sequelize = require('sequelize');
const sequelize = require('../config/database');
//const {Departament} = require('../models/Departament');

const Book = sequelize.define('Book', {
    tracking_code: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncremente: true,
        allowNull: false
    },
    tittle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    departament_code: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = { Book };