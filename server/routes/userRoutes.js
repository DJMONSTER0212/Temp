const express = require('express');
const { createUser, loginUser, getUser } = require('../controllers/userController');
const router = express.Router();

router.post('/create',createUser)
router.post('/login',loginUser)
router.get('/:userId',getUser)

module.exports = router