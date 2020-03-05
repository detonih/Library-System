const Sequelize = require('sequelize');
const sequelizeConfig = require('../config/database');

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

module.exports = { User };