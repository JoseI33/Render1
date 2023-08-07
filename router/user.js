const express = require ('express');
const router = express.Router();
const userController = require ('../controller/userController');


router.get('/', userController.Hello);
router.post('/', userController.userCreate);

module.exports = router;

// const express = require('express');
// const userController= require("../controller/userController");
// const router = express.Router();

// router.get("/", userController.getUsers);

// router.post("/", userController.createUsers);

// module.exports = router;