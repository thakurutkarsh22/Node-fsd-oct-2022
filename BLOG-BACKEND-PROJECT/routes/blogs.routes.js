const express = require("express");
const router = express.Router();

const {
  getAllBlogs,
  searchBlog,
  createNewBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blog.controller");

// METHODS

// Handlers

router.get("/", getAllBlogs);

router.post("/new", createNewBlog);

router.get("/search", searchBlog);

router.delete("/:id", deleteBlog);

router.patch("/:id", updateBlog);

module.exports = router;
