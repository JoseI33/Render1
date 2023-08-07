const Hello = (req, res) => {
    res.send('Hello World!');
};

const userCreate = (req, res) => {
    res.send('Welcome User');
};

module.exports = {
    Hello,
    userCreate,
};