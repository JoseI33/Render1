const jwt = require('../utils/jwt');

const isAuth = (req, res, next) => {
    if(!req.hedaders.Authorization) {
        return res.status(400).send({msg: "Authorization header missing"}
        );
    }else{
        const token = req.headers.Authorization.replace("Bearer", "")

        try {
            const payload = jwt.decoded(token)
        } catch (error) {
            console.log(error);
            res.status(418).send({msg:"Error you are not authorized"});
        }
    }

}

module.exports = {
    isAuth,
}