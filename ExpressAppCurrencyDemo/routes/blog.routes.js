const express = require("express");

const router = express.Router();

// METHODS

// Handlers

router.get("/", getAllBlogs);

router.get("/search", searchBlog);

router.post("/new", createNewBlog);

router.delete("/:id", deleteBlog);

router.patch("/:id", updateBlog);

module.exports = router;
