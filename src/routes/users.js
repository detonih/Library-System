const express = require('express');
const router = express.Router();
const { getAll, getByRegistry, getAllLoansByUserRegistry, create, update, destroy  } = require('../controllers/User.js');

router.get('/', getAll);
router.get('/:registry', getByRegistry);
router.get('/loans/:registry', getAllLoansByUserRegistry);
router.post('/', create);
router.patch('/:registry', update);
router.delete('/:registry', destroy);

module.exports = router;