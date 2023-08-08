const Hello = (req, res) => {
    res.send('Llevando usuarios');
};

const userCreate = (req, res) => {
    res.send('Welcome User');
};


module.exports = {
    Hello,
    userCreate,
};