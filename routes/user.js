const express = require('express')
const routes = express.Router()

routes.post("/login",function(req,res){
    res.send("Hola login")
})

routes.post("/register",function(req,res){
    res.send("Hola Register")
})

routes.get("/home",function(req,res){
    res.send("Hola Home")
})


module.exports = routes