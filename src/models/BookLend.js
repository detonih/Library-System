const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Book = require('./Book');
const Lend = require('./Lend');

const BookLend = sequelize.define('BookLend', {
  BookId: {
    type: Sequelize.INTEGER,
    references: {
      model: Book,
      key: 'id'
    }
  },
  LendId: {
    type: Sequelize.INTEGER,
    references: {
      model: Lend,
      key: 'id'
    }
  }
});

module.exports = { BookLend };