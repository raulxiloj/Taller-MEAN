var express = require('express')
var router = express.Router()

router.post("/login", function(req,res){
    res.send("Hola Login")
})

router.post("/register", function(req,res){
    res.send("Hola Register")
})



module.exports = router