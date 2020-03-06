const Sequelize = require('sequelize');
const sequelize = require('../config/database');

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

module.exports = { Book };