const { Book } = require('../models/Book');
const { Departament } = require('../models/Departament');
const { Lend } = require('../models/Lend');
const { User } = require('../models/User');
const { BookLend } = require('../models/BookLend');

const models = [Book, Departament, Lend, User, BookLend];

for(let i = 0; i < models.length; i++) {
  models[i].sync({ alter: true })
    .then(() => console.log('Database synced on ' + process.env.NODE_ENV + ' mode'))
}
