const express = require("express");

const { handleLogin } = require("../controllers/login.controller");

const router = express.Router();

router.post("/", handleLogin);

module.exports = router;
