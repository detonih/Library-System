const express = require('express');
const router = express.Router();
const { getAll, getById, getAllBooksByLendCode, create, update, destroy  } = require('../controllers/Lend.js');

router.get('/', getAll);
router.get('/:code', getById);
router.get('/books/:code', getAllBooksByLendCode);
router.post('/', create);
router.patch('/:code', update);
router.delete('/:code', destroy);

module.exports = router;