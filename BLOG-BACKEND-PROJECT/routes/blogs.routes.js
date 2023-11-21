const express = require("express");
const router = express.Router();

const {
  getAllBlogs,
  searchBlog,
  createNewBlog,
  deleteBlog,
  updateBlog,
  addBlog,
} = require("../controllers/blogs.controller");
const { fetchUser } = require("../middlewares/fetchUser.middleware");

// METHODS

// Handlers

router.get("/", getAllBlogs);

router.post("/addBlog", fetchUser, addBlog);

router.put("/updateBlog/:id", updateBlog);

router.delete("/deleteBlog/:id", deleteBlog);

// router.post("/addComment/:id", addCommentToBlog);

// router.post("/vote/:id", voteBlog);

// router.get("/getComments/:id", getComments);

module.exports = router;
