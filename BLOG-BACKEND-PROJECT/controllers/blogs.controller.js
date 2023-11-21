const Blog = require("../models/blog.model");
const jwt = require("jsonwebtoken");
const secretKey = "blogBackendProject";

async function getAllBlogs(req, res) {
  const blogs = await Blog.find({});
  res.status(200).json({ success: true, data: blogs });
}

async function addBlog(req, res) {
  const { title, description, tags, imageUrl } = req.body;
  const user = req.user;

  const newBlogPost = new Blog({
    title,
    description,
    imageURL: imageUrl,
    tags,
    user: user?.id,
  });
  await newBlogPost.save();

  res.status(201).json({
    newBlogPost,
  });
}
function updateBlog(req, res) {}
function deleteBlog(req, res) {}
function addCommentToBlog(req, res) {}
function voteBlog(req, res) {}
function getComments(req, res) {}

module.exports = {
  addBlog,
  getAllBlogs,
  deleteBlog,
  updateBlog,
  addCommentToBlog,
  voteBlog,
  getComments,
};
