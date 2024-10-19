// // @ts-ignore
// const fs = require("fs")

// console.log("Hello World....!")

// // const user = require("./user")
// // console.log(user);
// // const age = require("./user")
// // console.log(age);

// const user = require("./user")
// // console.log(user)
// // user.displayUserData(108)


// const employee = require("./employee")
// var emps = employee.getAllEmployees()
// console.log(emps)
// var semp = employee.findSingleEmployee(102)
// console.log(semp)

// fs.writeFileSync("employee.json",JSON.stringify(emps))


const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3002

app.use(express.json());

const UserRoutes = require('./Src/routes/UesrRoutes');
const RoleRoutes = require('./Src/routes/RoleRoutes');
const ProductRoutes = require('./Src/routes/ProductRoutes');
const UploadRoutes = require('./Src/routes/UploadRoutes');
// app.use("/user",userRoutes);
app.use("/role",RoleRoutes);
app.use("/product",ProductRoutes);
app.use("/upload",UploadRoutes);

// const userSchema = require("./Src/models/UserModel")
// //userSchema === db.users

// app.get("/users",async(req,res)=>{

//     //db.users.find()
//     const users = await userSchema.find()
//     res.json({
//         message:"Hey....!..........successFull.....",
//         data:users
//     })

// })
mongoose.connect("mongodb://127.0.0.1:27017/node").then(()=>{
    console.log('connected to db');
}).catch((err)=>{
    console.log('error:',err);
})

// //Create Server
app.listen(PORT,()=>{
    console.log('server is running on port',PORT);
})

// const userRoutes = require('./Src/routes/UesrRoutes');
// app.use("/users",userRoutes);