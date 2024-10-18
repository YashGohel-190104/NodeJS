const roleSchema = require("../models/RoleModel");

const roleValidate = async (req,res,next) => {
    const role = req.body.role;

    if(role === undefined || role === null){
        res.status(400).json({message:"Please select a role"});
    }else{
        const existingRole = await roleSchema.findById(role);
        if(existingRole == null){
            res.status(400).json({message:"Role Not exists"});
        }else{
            if(existingRole.name == "ADMIN" || existingRole.name == "admin"){
                next();
            }else{
                res.status(400).json({message:"Not Authorized"});
            }
        }
    }
};

module.exports = {
    roleValidate,
}