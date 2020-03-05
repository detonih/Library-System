const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const {Book} = require('../models/Book');

const Departament = sequelize.define('Departament', {
    departament_code: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// One departament has many books;
Departament.hasMany(Book);
// One book belongs to one departament
Book.belongsTo(Departament);

module.exports = { Departament, Book };