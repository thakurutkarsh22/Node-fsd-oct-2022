// MODELS, schema -> Blog

class BlogService {
  async findAllBlogs() {
    // here I have to connect to the database..

    const allBlogs = await monggse.find({ title: "hello" });
    return allBlogs;
  }
}
