const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const publisherController = require("../controllers/publisherController");


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor);

router.get("/getAuthorsData", authorController.getAuthorsData);

router.post("/createPublisher", publisherController.createPublisher);

router.get("/getPublishersData", publisherController.getPublishersData);

router.post("/createBook", bookController.createBook  )

router.get("/getBooksWithDetails", bookController.getBooksData)

router.put("/books", bookController.putBook)

module.exports = router;