async function getAllBlogs(req, res) {
  console.log("getAllBlogs debug");
  const ans = await BlogServiceInstance.findAllBlogs();

  res.status(201).json(ans);
}

function addBlog(req, res) {}
function updateBlog(req, res) {}
function deleteBlog(req, res) {}
function addCommentToBlog(req, res) {}
function voteBlog(req, res) {}
function getComments(req, res) {}

module.exports = {
  addBlog,
  deleteBlog,
  updateBlog,
  addCommentToBlog,
  voteBlog,
  getComments,
};
