const express = require('express');
const router = express.Router();
const users = require('./users.js');
const loans =require('./loans');

router.get('/', (req, res) => {
  res.send('Página principal')
});

router.use('/users', users);
router.use('/loans', loans);

module.exports = router;