const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Tag table/Collection will follow this schema rules.

const tagSchema = new Schema({
  categoryName: { type: String },
  category: [
    // blogs list
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
});

module.exports = mongoose.model("Tag", tagSchema); // THrough this I can Talk to DB (bec it provides intellisense)
