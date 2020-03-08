const express = require('express');
const router = express.Router();
const users = require('./users.js');
const lends = require('./lends');
const books = require('./books');
const departaments = require('./departament');

router.get('/', (req, res) => {
  res.send('Página principal')
});

router.use('/users', users);
router.use('/lends', lends);
router.use('/books', books);
router.use('/departaments', departaments);

module.exports = router;