const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000


var user = require('./routes/user')
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use("/", user)

app.listen(PORT, () => console.log("Servidor funcionando en puerto", PORT))

const uri = 'mongodb+srv://adminTaller:adminTaller123@cluster0.a0nse.mongodb.net/Taller?retryWrites=true&w=majority';

const dbConnetion = async () => {

    try {


        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('DB connected');
    } catch (error) {
        console.log(error);
    }
}

dbConnetion(); 