//Para crear usuarios.
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({ // Un objecto de un modelo que crearemos.

    name:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true //Con esto le decimos que sea unico y no se repita.
    },
    password: {
        type: String, //Es una cadena de texto.
        require: true,
    }


})

module.exports = mongoose.model('ninjausuarios', UserSchema); //Utilizamos el metodo modelo, llamamos a la base de datos.