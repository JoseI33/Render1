const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('../utils/jwt');

const register = async (req, res) => {
    const {
        name, email, password
    } = req.body
    
    // Primer paso
    if (!email) {
        return res.status(400).send({ msg: "Email is required" });
    }
    if (!password) {
        return res.status(400).send({ msg: "Password is required" });
    }
    //Segundo paso
    const user = new userModel({
        name,
        email:email.toLowerCase(),
        password,
        role: "user"
    })

    const salt = bcrypt.genSaltSync(Number(process.env.SALT)); //bcrypt encripta la base
    const passwordHash = bcrypt.hashSync(password, salt);
    user.password = passwordHash //la password representa la clave del usuario / la passwordHash es la nueva clave encriptada
    // console.log(password);
    // console.log(passwordHash);
    try {
        const newUsers = await user.save() //crea un nuevo usuario y lo guarda en la base.
        return res.status(200).send(newUsers) //retorna al usuario el nuevo usuario.
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg:"No se pudo crear el usuario"});
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        return res.status(400).send({msg:"todos los campos son requeridos"})
    }

    const emailLowerCase = email.toLowerCase();

    try {
        const findUser = await userModel.findOne({email:emailLowerCase})
       
        if(findUser) {
            const isMatch = bcrypt.compareSync(password, findUser.password) //compara el pass del usuario con el pass que le brinda bcrypt.
            if (isMatch) { //generamos token
                res.status(200).send({token:jwt.createToken(findUser)})
            }else {
                return res.status(400).send({msg:"Email o password son incorrectos"})
            }
        }else {
            return res.status(400).send({msg:"Usuario no en contrado"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({msg:"Error usuario no encontrado"})
    }
}
module.exports = {
    register,
    login,
}