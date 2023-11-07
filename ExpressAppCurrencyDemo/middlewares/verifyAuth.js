const jwt = require("jsonwebtoken");

function verifyAuth(req, res, next) {
  const token = req?.headers?.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Auth Failed!!!" });
  } else {
    // 1. verify the token if it is JWT or not

    jwt.verify(token, "hello_this_is_my_key", (error, decodedVersion) => {
      if (error) {
        return res.status(401).json({ message: "Auth Failed!!! token failed" });
      } else {
        next();
      }
    });

    // 2. Is this in database or not.
  }
}

module.exports = {
  verifyAuth,
};
