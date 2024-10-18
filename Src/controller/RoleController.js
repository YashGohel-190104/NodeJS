const roleSchema = require("../models/RoleModel");

const addRole = async(req, res) => {
    try{
        const saveRole = await roleSchema.saveRole(req.body);
        res.status(201).json({
            message: "Saved Role",
            data : saveRole
        });
    }catch(err){
        res.status(500).json({
            message: "Error while saving role",
            error: err.message
        });
    }
}

const getAllRoles = async (req, res) => {
    const roles = await roleSchema.find();
    if(roles){
        res.status(200).json({
            message: "Fetched Roles",
            data : roles
        });
    }else{
        res.json({message: "data not found",
            data: null
        })   
    }
}


module.exports = {
    addRole,
    getAllRoles,
}