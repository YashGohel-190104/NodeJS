const multer = require('multer');

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

 const upload = (req, file)=>{
    uploadFile(req, res, (err) => {
        if(err){
            // console.log(err);
            return res.status(400).json({
                message: "Error while uploading file",
                error: err.message,
            });
        }
        res.status(200).json({
            message: "File uploaded successfully",
            filename: file.filename,
        });
    });
 };

 module.exports = {
    upload
 };