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

router.get("/search", searchBlog);

router.post("/new", createNewBlog);

router.delete("/:id", deleteBlog);

router.patch("/:id", updateBlog);

module.exports = router;
