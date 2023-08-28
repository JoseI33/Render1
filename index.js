require('dotenv').config();

const express = require('express');
const app = express();
const port = 3007;
const userRoute = require('./router/user');
const authRoute = require('./router/auth');

const conectarBd = require('./database');
const bodyParser = require('body-parser');
conectarBd();

app.use(bodyParser.urlencoded({extended:true})); //Tiene una extension url y la tiene que leer.
app.use(bodyParser.json()); //le decimos que es un formato JSON

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

// http://localhost:3007/api/users

app.listen (port, () => {
    console.log(`Conexión del puerto ${port}`);
});