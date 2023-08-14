require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const userRoute = require('./router/user');
const authRoute = require('./router/auth');

const conectarBd = require('./database');
const bodyParser = require('body-parser');
conectarBd();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

// http://localhost:3000/api/users

app.listen (port, () => {
    console.log(`Conexión del puerto ${port}`);
});