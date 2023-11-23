const Tag = require("../models/tag.model");

module.exports.getAllTags = async (req, res) => {
  const alltags = await Tag.find({});
  res.status(200).json(alltags);
};
