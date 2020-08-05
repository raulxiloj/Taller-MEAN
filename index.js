const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require ('mongoose')


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
 * Conexión con la base de datos
 *
 */
const usuario = require("./UserSchema");
const uri = "mongodb+srv://adminTaller:adminTaller123@cluster0.a0nse.mongodb.net/Testing?retryWrites=true&w=majority";
mongoose.connect(uri, function (err) {

    useMongoClient = true
    if (err) throw err;
    console.log('Conectado Correctamente');
});




/**
 * Rutas
 */

app.use("/",user)