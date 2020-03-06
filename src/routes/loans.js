const express = require('express');
const router = express.Router();
const { getAll, getById, getAllBooksByLoanCode, create, update, destroy  } = require('../controllers/Loan.js');

router.get('/', getAll);
router.get('/:code', getById);
router.get('/books/:code', getAllBooksByLoanCode);
router.post('/', create);
router.patch('/:code', update);
router.delete('/:code', destroy);

module.exports = router;