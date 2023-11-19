const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: [true, "Email should be unique"],
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    username: {
      type: String,
      required: true,
      min: 3,
      max: 30,
      unique: [true, "username should be unique"],
    },

    later: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
