const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-fine", function (req, res) {
    res.send("My first ever api!")
})
//creating author
router.post("/createAuthorsky", BookController.createAuthorsky)

//creating book
router.post("/createBooksky", BookController.createBooksky)

//1 getting books data
router.get("/getBookskyData", BookController.getBookskyData)
//2nd
router.get("/skfindauthor", BookController.skfindauthor)

//3rd find book
router.get("/skfindBooks", BookController.skfindBooks)


// router.get("/getUsersData", UserController.getUsersData)



module.exports = router;
// {
// "author_id":1,
// "author_name":"Chetan Bhagat",
// "age":25,
// "address":"New delhi"

