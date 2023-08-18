const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const expToken = new Date();
   
    expToken.setHours(expToken.getHours() + 3);

    const payload = {
        user_id: user._id, //lo genera mongoose
        iat: Date.now() //cuando se crea
        exp: expToken.getTime()
    }

    return jwt.sign(payload, process.env.JWT_KEY)

}

module.exports = {
    createToken,
}