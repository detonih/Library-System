const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const { Lend } = require('../models/Lend');

const Book = sequelize.define('Book', {
  tracking_code: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  tittle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Book.belongsToMany(Lend, { through: 'BookLends' });
Lend.belongsToMany(Book, { through: 'BookLends' });

module.exports = { Book };