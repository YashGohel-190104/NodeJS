const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    role:{
      type: Schema.Types.ObjectId,
      ref: 'Roles'  // ref to Role model.js  // Role model will have roleName, roleDescription, rolePermissions fields.  // Role model will be created in RoleRoutes.js file.  // RoleRoutes.js file will be created in routes folder.  // RoleRoutes.js file will have necessary routes to create, update, delete roles.  // RoleRoutes.js file will be used in app.js file.  // app.js file will be used to start the server and set up the routes.  // app.js file will also include necessary setup for database connection.  // database connection will be established in app.js file.  // app.js file will be used to start the server and set up the routes.  // app.js file will also include necessary setup for database connection.  // database connection will be established in app.js file.  // app.js
    },
    name: {
        type: String,
      },
      email: {
        type: String,
      },
      age: {
        type: Number,
      },
      status: {
        type: Boolean,
      },
      password: {
        type: String,
      },
      hobbies:[
        {
          type:String,
        }
      ],
      bloodGroups:{
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
      },
      
},
  { timestamps: true }
)
// mongoose.model("Users",userSchema);
// module.exports = userSchema;
// userSchema == db.users
module.exports = mongoose.model("Users",userSchema);