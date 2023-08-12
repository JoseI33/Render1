const getProduct = (req, res) => {
    res.send('Getting product');
};

const createProduct = (req, res) => {
    res.send('Create product');
};


module.exports = {
    getProduct,
    createProduct,
};