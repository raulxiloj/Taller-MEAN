const express = require('express')
const router = express.Router()
const { registerUser, login } = require('../controllers/authController')

router.post("/login", login);

router.post("/register", registerUser);



module.exports = router