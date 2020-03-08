const Sequelize = require('sequelize');
const sequelizeConfig = require('../config/database');
const { Lend } = require('../models/Lend');

const User = sequelizeConfig.define('User', {
  registry: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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

//One User can make many Lend
User.hasMany(Lend);
//One lend belongs to one user
Lend.belongsTo(User);

module.exports = { User };