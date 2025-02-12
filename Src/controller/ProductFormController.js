const multer = require('multer');

const store = multer.diskStorage({
    destination: './ProductImg',
    filename: (req, file, cb)=> {
        cb(null, file.originalname);
    }
});

const uploadFile = multer({
    storage: store,
    limits: { fileSize: 50000000 } ,
    
    fileFilter: (req, file, cb) => {
        if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type, only JPEG and PNG are allowed."), false);
        } 
    }// 5MB
}).single('ProductImg');


const productImgUpload = async(req,res)=>{

     uploadFile(req,res,async(err)=>{  
        if(err){
            console.log(err);
            return res.status(400).json({
                message: "Error while uploading product image",
                error: err.message,
            });
        }
        else{
            res.status(200).json({
                message: "Product image uploaded successfully",
                filename: req.file,
            });
        }
    });
};

module.exports = {
    productImgUpload,
};