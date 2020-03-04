const express = require('express');
const router = express.Router();
const users = require('./User');

router.get('/', (req, res) => {
  res.send('Página principal')
});

router.post('/users', users)

module.exports = router;