const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Loan = sequelize.define('Loan', {
  code: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
},
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  return_date: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

module.exports = { Loan };