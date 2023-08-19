const express = require ('express');
const router = express.Router();
const userController = require ('../controller/userController');
const authMD = require('../middleware/authenticated')


router.get('/',authMD.isAuth, authMD.isAdmin, userController.getUsers);
router.post('/',authMD.isAuth, authMD.isAdmin, userController.userCreate);

module.exports = router;
