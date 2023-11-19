const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser,
  saveLater,
} = require("../controllers/auth.controller");

router.get("/signup", createUser);

router.post("/login", loginUser);

router.post("/savelater/:id", saveLater);

module.exports = router;
