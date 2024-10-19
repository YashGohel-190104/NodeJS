const cloudanry = require('cloudinary').v2

const cloudinaryFile = async(file)=>{

    cloudanry.config({
        cloud_name: 'dslpnxmn9',
        api_key: '393251427194669',
        api_secret: 'BN51wcJud_xMOOtJBdhE_N6TH7M'
    });

    const res = await cloudanry.uploader.upload(file)
    return res;
};

module.exports = {
    cloudinaryFile
};