const express = require('express');
const router = express.Router();
const { getAll, create  } = require('../controllers/User');

router.get('/', getAll);
router.post('/users', create);

module.exports = router;