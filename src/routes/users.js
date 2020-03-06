const express = require('express');
const router = express.Router();
const { getAll, getById, create  } = require('../controllers/User.js');

router.get('/', getAll);
router.get('/:registry', getById);
router.post('/', create);

module.exports = router;