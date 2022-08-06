const express = require("express");
const abc = require("../introduction/intro");
const logger = require('../logger/logger.js')
const helper= require('../util/helper.js')
const formatter = require('../validator/formatter.js');
const router = express.Router();



router.get("/test-me", function (req, res) {
  console.log("My batch is", abc.name);
  abc.printName();
  logger.welcome();
  helper.date()
    helper.month()
    helper.batch()
    formatter.trim()
    formatter.lower()
    formatter.upper()
  res.send("My second ever api!");
});

router.get("/test-you", function (req, res) {
  res.send("This is the second routes implementation");
});

router.get("/give-me-students-data", function (req, res) {});
module.exports = router;