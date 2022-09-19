const express = require('express');
const conectDb = require('./config/db');

const app = express();
conectDb();
//initialize middleware
app.use(express.json())
//definir rutas

app.use('/api/contacts', require('./routes/web'))

app.listen(4000, () =>{
    console.log('el servidor esta corriendo bien')
})