const mongoose = require("mongoose");

// schema ....

const authorSchema = new mongoose.Schema({
  fullName: { type: String, maxlength: 20, default: "Anynonomous" },
  instaHandle: { type: String },
  twitterHandle: { type: String },
  email: { type: String, requred: true },
  image: { type: String },
});

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, maxlength: 100 },
  content: { type: String, default: "Hey I am default" },
  publishAt: { type: Date },
  author: [authorSchema],
});

// model ....

const blogModel = mongoose.model("Blogs", blogSchema);

module.exports = blogModel;
