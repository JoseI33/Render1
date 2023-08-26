const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const expToken = new Date();

    expToken.setHours(expToken.getHours() + 3); //la expiracion del token, le pide 3 horas mas como limite de logueo

    const payload = { // la informacion del token
        user_id: user._id, //lo que genera mongoose
        iat: Date.now(), //cuando se crea
         exp: expToken.getTime(), //expiracion del tiempo de logueo.
         role: user.role //lo agregamos para poder decirle que es admin.
    }

    return jwt.sign(payload, process.env.JWT_KEY) //sign es la firma del token.

}

const decoded = (token) => {
    return jwt.verify(token, process.env.JWT_KEY)
}



module.exports = {
    createToken,
    decoded,
}