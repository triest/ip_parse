var express = require('express');
var router = express.Router();
var myParser = require("body-parser");
var app = express();


const IndexController = require('../controllers/IndexController.js');



// определяем маршруты и их обработчики внутри роутера userRouter
//router.use("/create", userController.addUser);
router.get("/", IndexController.index);

router.get("/read", IndexController.read);

//add page
module.exports = router;
