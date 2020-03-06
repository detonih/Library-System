const express = require('express');
const router = express.Router();
const { getAll, getById, create, update, destroy  } = require('../controllers/User.js');

router.get('/', getAll);
router.get('/:registry', getById);
router.post('/', create);
router.patch('/:registry', update);
router.delete('/:registry', destroy);

module.exports = router;