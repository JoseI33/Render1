const getProduct = (req, res) => {
    res.send('Geting product');
};

const createProduct = (req, res) => {
    res.send('Create product');
};


module.exports = {
    getProduct,
    createProduct,
};