const express = require('express')
const routes = express.Router()
const { registerUser, login } = require('../controllers/auth')

routes.post("/register", registerUser);

routes.post("/login", login);

routes.get("/home", function (req, res) {
    res.send("Hola Home")
})


module.exports = routes