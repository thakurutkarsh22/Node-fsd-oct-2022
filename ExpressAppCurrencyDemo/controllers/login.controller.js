const jwt = require("jsonwebtoken");

//  this is acting like a DB

const secretKeyOfLogin = "hello_this_is_my_key";

const users = [
  { id: 1, username: "utkarsh", age: 24, password: "password" },
  { id: 2, username: "ankush", password: "asdf1234" },
];

//  --------

function handleLogin(req, res) {
  const body = req.body;
  const { username, password } = body;

  const user = users.find(
    (user) => user.password === password && user.username === username
  );

  if (!user) {
    // Authentication failed 401
    return res.status(401).json({ message: "Auth Failed!!!" });
  } else {
    //  generate a token and send it back to the client  201

    const jwtToken = jwt.sign(
      {
        userId: user.id,
        username: user.username,
      },
      secretKeyOfLogin,
      {
        expiresIn: "2h",
      }
    );

    // you should store it in the Database.

    res.status(201).json({
      token: jwtToken,
    });
  }

  //   res.status(200).json({
  //     username,
  //     password,
  //   });
}

module.exports = {
  handleLogin,
};
