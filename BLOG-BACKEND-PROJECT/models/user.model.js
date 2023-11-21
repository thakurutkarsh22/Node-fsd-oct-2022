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

// this function has only one thing to do..
userSchema.statics.findAndValidate = async function (userName, password) {
  const founduser = await this.findOne({ username: userName });

  if (!founduser) {
    return false;
  } else {
    return founduser.password === password ? founduser : false;
  }
};

module.exports = mongoose.model("User", userSchema);
