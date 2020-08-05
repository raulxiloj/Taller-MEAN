const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router()
const bodyParser = require('body-parser')

/**
 * Importaciones
 */
var user = require('./routes/user')


/**
 *  Configuraciones del Servidor
 */
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.listen(3000,() => console.log("Server start on port 3000"))

/**
 * Rutas
 */

app.use("/",user)