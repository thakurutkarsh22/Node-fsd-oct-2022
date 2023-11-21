const Blogs = require("../models/blog.model");

class BlogService {
  async findAllBlogs() {
    // here I have to connect to the database..

    const allBlogs = await Blogs.find({});
    return allBlogs;
  }
}

module.exports = BlogService;

// TODO: utkarsh create service
