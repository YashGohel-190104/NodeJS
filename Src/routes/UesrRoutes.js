const router = require('express').Router();
const userController = require('../controller/UserController');
const validatorMiddleware = require('../Middleware/ValidatorMiddleware');
const roleValidateMiddleware = require('../Middleware/RoleValidateMiddleware');
const authMiddleware = require('../Middleware/AuthMiddleware');



router.get("/Users",authMiddleware.authMiddleware,userController.getAllUsers);
router.get("/users",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)
router.post("/addUser",userController.addUser)
router.delete("/deleteuser/:id",userController.deleteUser)
router.put("/updateuser/:id",userController.updateUser)
router.delete("/deletebyage",userController.deleteByAge)
router.post("/login",userController.loginUser)

// coreModule.exports = router;
module.exports = router;