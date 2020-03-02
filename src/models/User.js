const Sequelize = require('sequelize');
const sequelizeConfig = require('../config/database');

const User = sequelizeConfig.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: Sequelize.STRING
});

module.exports = User;