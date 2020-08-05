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
 * Conexión con la base de datos
 *
 */
const {MongoClient} = require('mongodb');
const { listDatabases } = require("./listDatabases")

async function main(){
    
    const uri = "mongodb+srv://adminTaller:adminTaller123@cluster0.a0nse.mongodb.net/Testing?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);




/**
 * Rutas
 */

app.use("/",user)