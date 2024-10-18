const userSchemaValidate = (req, res, next) => {
    const {name,email} = req.body;
    
    if(name == undefined || name == null || email == undefined || email == null){
        return res.status(400).json({
            message: "Name and Email are required",
        })
    }else{
        next();
    }
}

module.exports = userSchemaValidate;