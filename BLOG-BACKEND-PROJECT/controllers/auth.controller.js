// DB req

const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const secretKey = "blogBackendProject";

async function createUser(req, res) {
  const { userName, password, email } = req.body;

  const usercollectionObj = new User({ username: userName, password, email }); //
  const response = await usercollectionObj.save(); // Db db please save the

  const authData = {
    user: { id: usercollectionObj._id },
  };

  // while you are creting a user we need singIn also...
  const authToken = jwt.sign(authData, secretKey);

  res.status(201).json({
    success: true,
    authToken,
    user: response,
  });
}

// you can choose this also no worries.
async function oldLoginUser(req, res) {
  const { userName, password } = req.body;

  const isUserFoundAndValidated = await User.findAndValidate(
    userName,
    password
  );
  const foundUser = await User.find({ username: userName }); // requ database

  if (!foundUser || foundUser.length === 0) {
    return res.status(401).json({
      success: false,
      message: "Invalid Credentials user not found",
    });
  } else {
    // 1. Hash the password and check the hash (that is alrealy stored)
    if (foundUser[0].password === password) {
      const authData = {
        user: { id: foundUser[0]._id },
      };
      const authToken = jwt.sign(authData, secretKey);

      return res.status(200).json({
        success: true,
        user: foundUser[0],
        authToken,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  }
}

async function loginUser(req, res) {
  // hjash
  const { userName, password } = req.body;

  const usrFound = await User.findAndValidate(userName, password);

  if (usrFound) {
    const authData = {
      user: { id: usrFound._id },
    };
    const authToken = jwt.sign(authData, secretKey);
    res.status(200).json({
      success: true,
      authToken,
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid Credentials",
    });
  }
}
function saveLater(req, res) {}

module.exports = {
  createUser,
  loginUser,
  saveLater,
};
