require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const userRoute = require('./router/user');
const productRoute = require('./router/product');

const conectarBd = require('./database');
conectarBd();

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

// http://localhost:3000/api/users

app.listen (port, () => {
    console.log(`Conexión del puerto ${port}`);
});