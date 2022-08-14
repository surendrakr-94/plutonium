const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const BookModel= require("../models/bookModel")
const UserController= require("../controllers/userController")
const BookController = require("../controllers/bookController");


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)
router.post("/createNewBook", BookController.createNewBook);

router.get("/getAllBooks", BookController.getNewBook);

module.exports = router;