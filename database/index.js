const mongoose = require('mongoose');

const conectarBd = async () => {
    try {
        await mongoose.connect(process.env.CONNECTDB);
        console.log('Conexión exitosa');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = conectarBd