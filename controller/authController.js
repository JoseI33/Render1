const User = require('../models/user');
const bcrypt = require('bcrypt');




const register = async (req, res) => {
    const {
        name, email, password
    } = req.body

    if (!email) {
        return res.status(400).send({ msg: "Email is required" });
    }
    if (!password) {
        return res.status(400).send({ msg: "Password is required" });
    }

    const user = new User({
        email,
        name,
        password,
        role: "user"
    })

    const salt = bcrypt.genSaltSync(Number(process.env.SALT));
    const passwordHash = bcrypt.hashSync(password, salt);
    user.password = passwordHash
    // console.log(password);
    // console.log(passwordHash);
    try {
        const newUsers = await user.save()
        return res.status(200).send(newUsers)
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg:"No se pudo crear el usuario"});
    }







};

const login = (req, res) => {
    res.send('Create product');
};


module.exports = {
    register,
    login,
};