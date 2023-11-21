const jwt = require("jsonwebtoken");
const secretKey = "blogBackendProject";

module.exports.fetchUser = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];

  let userID = null;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Authorization required" });
  }

  jwt.verify(token, secretKey, (error, decodedMessage) => {
    if (error) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Token Login again" });
    } else {
      req.user = decodedMessage.user;
    }
  });

  next();
};
