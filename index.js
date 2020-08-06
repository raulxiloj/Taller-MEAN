const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


/**
 * Importaciones
 */
var user = require('./routes/user')


/**
 *  Configuraciones del Servidor
 */
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.listen(3000, () => console.log("Server start on port 3000"))

/**
 * Conexión con la base de datos
 *
 */
const uri = "mongodb+srv://adminTaller:adminTaller123@cluster0.a0nse.mongodb.net/Testing?retryWrites=true&w=majority";

const dbConnection = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conectado Correctamente');
    } catch (e) {
        console.log(e)
    }
}

dbConnection();


/**
 * Rutas
 */

app.use("/", user)