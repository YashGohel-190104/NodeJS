const userSchema = require("../models/UserModel.js")

const getAllUsers = async(req,res)=>{
    if(users){
        req.status(200).json({
            message:"Donr your data fetch Sucessfully ",
            data : users
        })
    }else{
        res.json({
            message:"Your Data is Not Found",
            data:[]
        })
    }
}

const getUserById = async(res,req)=>{
    const id = req.parms.id;

    const user = await userSchema.findById(id)
    if(user){
        res.json({
            message:"Donr your data fetch Sucessfully ",
            data : users
        })
    }else{
        res.json({
            message:"Your Data is Not Found",
            data:[]
        })
    }
}

const addUser = async(req,res)=>{
    console.log("Data sucessfull....",req.body);

    const saveUser = await userSchema.create(req.body);

    req.status(201).json({
        message: "Saved User",
        data : saveUser
    })
}

const deleteUser = async (req, res) => {
    //get id from req.params object...
    const id = req.params.id;
    const deletedUser = await userSchema.findByIdAndDelete(id);
    console.log("deleted user...", deletedUser);
  
    if (deletedUser === null) {
      res.status(404).json({
        message: "User Not Found !!",
        data: {},
      });
    } else {
      res.status(200).json({
        message: "User Deleted Successfully !!",
        data: deletedUser,
      });
    }
  };

  const updateUser = async (req, res) => {
    //update user set name=?,email=? where id=?
    //id -->req.params.id
    //name,email -->req.body
  
    const id = req.params.id;
    const dataToUpdate = req.body;
    //console.log("data to update...", dataToUpdate);
  
    const updatedUser = await userSchema.findByIdAndUpdate(id, dataToUpdate,{new:true});
    if(updatedUser || updatedUser!=null){
      res.status(200).json({
        message: "User Updated Successfully !!",
        data: updatedUser,
      });
    }
      else{
        res.status(404).json({
          message: "User Not Found !!",
          data: {},
        });
      }
    //console.log("updated user...", updatedUser);
    // res.status(200).json({
    //   message: "User Updated Successfully !!",
    //   data: updatedUser,
    // });
  };
  const deleteByAge = async (req, res) => {

    const age = req.query.age;
    const deletedUsers = await userSchema.deleteMany({age:{$gte:age}});
    console.log("deleted users...", deletedUsers);
    if (deletedUsers.deletedCount > 0) {
      res.status(200).json({
        message: "Users Deleted Successfully !!",
        data: deletedUsers,
      });
    } else {
      res.status(404).json({
        message: "Users Not Found !!",
        data: {},
      });
    }
}  

const loginUser = async(req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const userFromEmail = await userSchema.findOne({ email: email});
  if(userFromEmail !=null){
  
    const isMatch = await encrypt.comparePassword(password,userFromEmail.password);
    console.log("isMatch...",isMatch);
    if(isMatch){
      res.json({
        message:"login successfully",
        data:userFromEmail
      })
    }
    else{
      res.json({
        message:"Invalid Credential"
      })
    }
  }
  else{
    res.json({
      message:"user not found"
    })
  }
  
}

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
    deleteByAge,
    loginUser,
}