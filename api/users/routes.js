const express = require("express");
const router = express.Router();
const UserController = require("./controller");

router.post("/login", UserController.loginUser);
router.post("/signup", UserController.signupUser);

module.exports = router;
