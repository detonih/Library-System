const express = require('express');
const router = express.Router();
const users = require('./users');

router.get('/', (req, res) => {
  res.send('Página principal')
});

router.use('/users', users)

module.exports = router;