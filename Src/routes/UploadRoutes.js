const router = require('express').Router();
const UploadController = require('../controller/UploadController');

router.post('/upload', UploadController.upload);

module.exports = router;