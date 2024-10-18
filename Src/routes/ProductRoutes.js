const router = require('express').Router();
const productController = require('../controller/ProductController');

router.post('/addProduct', productController.addProduct);
router.get('/getProduct', productController.getAllProducts);


module.exports = router;