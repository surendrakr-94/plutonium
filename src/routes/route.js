const express = require('express');
const router = express.Router();
const BookController= require("../controllers/authorBookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook  )
router.post("/createAuthor",BookController.createAuthor)
router.get("/getbooklist",BookController.booklist)
router.get("/getauthorprice",BookController.author)
router.get("/getauthorname",BookController.authorname)

module.exports=router