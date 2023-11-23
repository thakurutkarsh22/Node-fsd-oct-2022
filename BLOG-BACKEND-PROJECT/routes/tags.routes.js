const express = require("express");
const router = express.Router();

const { getAllTags } = require("../controllers/tags.controller");

router.get("/getAllTags", getAllTags);

module.exports = router;
