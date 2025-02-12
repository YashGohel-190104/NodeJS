const router = require('express').Router();
const ProductFormController = require('../controller/ProductFormController');

router.post('/productForm', ProductFormController.productImgUpload);

module.exports = router;