const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000


var user = require('./routes/user')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.use("/",user)

app.listen(PORT,() => console.log("Servidor funcionando en puerto",PORT))