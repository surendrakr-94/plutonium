const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const jwtMW= require("../middlewares/auth")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",jwtMW.jwtvalidation, userController.getUserData)

router.put("/users/:userId", jwtMW.jwtvalidation,userController.updateUser)

router.delete("/users/:userId",jwtMW.jwtvalidation, userController.deleteUser)

module.exports = router;