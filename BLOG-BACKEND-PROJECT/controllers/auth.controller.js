// DB req

const User = require("../models/user.model");

async function createUser(req, res) {
  const { userName, password, email } = req.body;

  const usercollectionObj = new User({ username: userName, password, email }); //
  const response = await usercollectionObj.save(); // Db db please save the

  res.status(200).json({
    userName,
    password,
    email,
  });
}
function loginUser(req, res) {}
function saveLater(req, res) {}

module.exports = {
  createUser,
  loginUser,
  saveLater,
};
