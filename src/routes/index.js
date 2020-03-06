const express = require('express');
const router = express.Router();
const users = require('./users.js');
const loans = require('./loans');
const books = require('./books');
const departaments = require('./departament');

router.get('/', (req, res) => {
  res.send('Página principal')
});

router.use('/users', users);
router.use('/loans', loans);
router.use('/books', books);
router.use('/departaments', departaments);

module.exports = router;