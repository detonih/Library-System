const express = require('express');
const router = express.Router();
const { getAll, getByRegistry, getAllLendsByUserRegistry, create, update, destroy  } = require('../controllers/User.js');

router.get('/', getAll);
router.get('/:registry', getByRegistry);
router.get('/loans/:registry', getAllLendsByUserRegistry);
router.post('/', create);
router.patch('/:registry', update);
router.delete('/:registry', destroy);

module.exports = router;