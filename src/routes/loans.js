const express = require('express');
const router = express.Router();
const { getAll, getById, create, update, destroy  } = require('../controllers/Loan.js');

router.get('/', getAll);
router.get('/:code', getById);
router.post('/', create);
router.patch('/:code', update);
router.delete('/:code', destroy);

module.exports = router;