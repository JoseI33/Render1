const express = require ('express');
const router = express.Router();
const userProduct = require ('../controller/productController');


router.get('/', userProduct.getProduct);
router.post('/', userProduct.createProduct);

module.exports = router;
