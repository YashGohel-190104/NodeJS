const multer = require('multer');
const cloudinaryUpload = require('../util/CloudinaryUpload.js');

const store = multer.diskStorage({
    destination:"./Files",
    filename: (req, file, cb)=> {
        cb(null, file.originalname);
    }
});

const uploadFile = multer({
    storage: store,
    limits: {
        fileSize: 10000000, // 10MB
    },
    fileFilter: (req, file, cb) => {
        if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type, only JPEG and PNG are allowed."), false);
        } 
    }
 }).single('Imagefile');

 //normal method 

//  const upload = async(req, res)=>{
//     // console.log("Line 0 exicute");
//     uploadFile(req, res, async(err) => {
//         // console.log("Line 1 exicute");
        
//         if(err){
//             console.log(err);
//             return res.status(400).json({
//                 message: "Error while uploading file",
//                 error: err.message,
//             });
//         }else{
//             res.status(200).json({
//                 message: "File uploaded successfully",
//                 filename: req.file,
//             });
            
            
//         }
       
//     });
//  };

// Cloudinary method
const upload = async(req, res) => {
    uploadFile(req, res, async(err) => {
        if(err){
            return res.json({
                message: err || "Error while uploading file",
            });
        }else{
            // Upload to cloudinary
            const result = await cloudinaryUpload.cloudinaryFile(req.file.path);

            res.status(200).json({
                message: "File uploaded successfully",
                file: req.file,
                secure_url:result.secure_url,
            });            
        }       
    });
};

 module.exports = {
    upload
 };