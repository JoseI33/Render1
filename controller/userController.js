const userModels = require('../models/user');

const getUsers = async (req, res) => {
    try {
        const users = await userModels.find();
        if (users) {
            return res.status(200).send(users);
        } else {
            return res.status(200).send([]);
        }
    } catch (error) {
       console.log(error);
       res.status(500).send(error)
    }
};

const userCreate = async (req, res) => {
    const {name, email, password} = req.body 
    
    const newUser = new userModels ({
        name,
        email,
        password
    })
    try {
        const user = await newUser.save();
        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        res.status(404).send({ msg:"Don't entry my king"})
    }

    console.log(req.body);
};


module.exports = {
    getUsers,
    userCreate,
};