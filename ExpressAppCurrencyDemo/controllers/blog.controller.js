async function getAllBlogs(req, res) {
  // in here we are going to call my service....

  const blogService = new BlogService();

  const ans = await blogService.findAllBlogs();

  res.staus().json(ans);
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
