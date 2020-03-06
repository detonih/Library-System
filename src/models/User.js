const Sequelize = require('sequelize');
const sequelizeConfig = require('../config/database');
const {Loan} = require('../models/Loan');

const User = sequelizeConfig.define('User', {
  registry: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncremente: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

//One User can make many Loans
User.hasMany(Loan);
//One loan belongs to one user
Loan.belongsTo(User);

module.exports = { User };