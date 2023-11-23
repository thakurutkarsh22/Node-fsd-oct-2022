const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser,
  saveLater,
} = require("../controllers/auth.controller");
const {
  validateUserLogin,
} = require("../middlewares/validateUserLogin.middleware");

router.post("/signup", createUser);

router.post("/login", validateUserLogin, loginUser);

router.post("/savelater/:id", saveLater);

module.exports = router;
