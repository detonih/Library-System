const express = require('express');
const router = express.Router();
const { create } = require('../controllers/User');

router.post('/users', create)