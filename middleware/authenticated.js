const jwt = require('../utils/jwt');

const isAuth = (req, res, next) => {// next es para que pase el siguiente.
    if (!req.headers.authorization) {
        return res.status(400).send({ msg: "Authorization header missing" });
    } else {
        const token = req.headers.authorization.replace("Bearer ", "")

        try {
            const payload = jwt.decoded(token)
            try {
                req.user = payload
                next();
            } catch (error) {
                res.status(500).send({msg:"Error"});
            }
        } catch (error) {
            console.log(error);
            res.status(400).send({ msg: "Error you are not authorized" });
        }
    }

}

/*const isAdmin = (req, res, next) => {
    if (req.user.role && req.user.role === "admin") {
        return next()
    }else {
        return res.status(403).send({msg:"No tienes el rol necesario para este recurso"})

        try {
        
        } catch (error) {
            console.log(error);
        }
    }

    
}*/

module.exports = {
    isAuth,
    //isAdmin,
}