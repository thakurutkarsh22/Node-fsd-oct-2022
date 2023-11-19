const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  message: { type: String, required: true, min: 3, max: 240 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  like: Number,
  isNested: { type: Boolean },
  parentComment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
  },
  comments: [this],
});

module.exports = mongoose.model("Comment", commentSchema);
