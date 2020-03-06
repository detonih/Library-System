const express = require('express');
const router = express.Router();
const { getAll, getById, create, update, destroy  } = require('../controllers/Book.js');

router.get('/', getAll);
router.get('/:tracking_code', getById);
router.post('/', create);
router.patch('/:tracking_code', update);
router.delete('/:tracking_code', destroy);

module.exports = router;