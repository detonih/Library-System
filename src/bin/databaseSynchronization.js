const { Book } = require('../models/Book');
const { Departament } = require('../models/Departament');
const { Loan } = require('../models/Loan');
const { User } = require('../models/User');

const models = [Book, Departament, Loan, User];

for(let i = 0; i < models.length; i++) {
  models[i].sync({ alter: true })
    .then(() => console.log('Database synced on ' + process.env.NODE_ENV + ' mode'))
}
