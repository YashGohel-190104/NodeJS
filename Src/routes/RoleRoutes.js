const router = require('express').Router();
const RoleController = require('../controller/RoleController');

router.post('/addRole',RoleController.addRole);
router.post('/getAllRoles',RoleController.getAllRoles);

module.exports = router;