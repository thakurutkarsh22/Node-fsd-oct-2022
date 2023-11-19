const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true, min: 3, max: 1000 },
  description: { type: String, required: true, min: 3, max: 10000 },
  tags: { type: [String], default: ["General"], required: true },
  imageURL: { type: String, default: "" },
  upvote: { type: Number },
  downvote: { type: Number },
  userName: { type: String },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("Blog", blogSchema);

// TODO : utkarsh
// User,
// Comment
// BLog
// Tag
