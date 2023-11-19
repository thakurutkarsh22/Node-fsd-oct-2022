const BlogService = require("../Service/blog.service");

// TODO: you can implement singleton pattern here.  or dependency Injection.
const BlogServiceInstance = new BlogService();

async function getAllBlogs(req, res) {
  console.log("getAllBlogs debug");
  const ans = await BlogServiceInstance.findAllBlogs();

  res.status(201).json(ans);
}

function searchBlog(req, res) {}
function createNewBlog(req, res) {}
function deleteBlog(req, res) {}
function updateBlog(req, res) {}

module.exports = {
  getAllBlogs,
  searchBlog,
  createNewBlog,
  deleteBlog,
  updateBlog,
};
