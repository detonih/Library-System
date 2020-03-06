const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const { Loan } = require('../models/Loan');

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

// One book may have just one loan (this will create the colum on Loan table)
//the book can only be on a single loan
Book.hasMany(Loan);

Loan.belongsTo(Book);


module.exports = { Book };