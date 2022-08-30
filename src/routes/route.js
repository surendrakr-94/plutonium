const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const jwtmidd = require("../middlewares/auth")

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", jwtmidd.authentication, jwtmidd.authorization, userController.getUserData)

router.put("/users/:userId", jwtmidd.authentication, jwtmidd.authorization, userController.updateUser)

router.delete("/users/:userId", jwtmidd.authentication, jwtmidd.authorization, userController.deleteUser)

module.exports = router;