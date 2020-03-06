const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const { Book } = require('../models/Book');

const Loan = sequelize.define('Loan', {
    code: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    return_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

//One Loan may contain several books
Loan.hasMany(Book);
// One book belongs to just one Loan;
Book.belongsTo(Loan);

module.exports = { Loan };