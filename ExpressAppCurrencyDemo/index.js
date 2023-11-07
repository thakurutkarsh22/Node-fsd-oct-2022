const mongoose = require("mongoose");
const express = require("express");
const server = express();

const currencyRoutes = require("./routes/currencies.routes");
const blogRoutes = require("./routes/blog.routes");
const loginRoutes = require("./routes/login.routes");
const jwt = require("jsonwebtoken");

const { verifyAuth } = require("./middlewares/verifyAuth");

// in here we can authenticate
// listen to events

// middle ware changing req to JSON REQ

server.use(express.json());

// I am Regestring ROUTES (which is kind of middleware)

server.use("/login", loginRoutes);

server.get("/profile", (req, res, next) => {
  res.status(200).end("Profile stucture + ");
});

// server.use(verifyAuth); // MY middleware for authorization

server.use("/currencies", currencyRoutes);
server.use("/blog", blogRoutes);

//  --------- CONNECT TO DATABASE ---------------

const dburl = "mongodb://127.0.0.1:27017";
mongoose
  .connect(dburl + "/myCompany")
  .then((data) => {
    console.log("My db is connected");
  })
  .catch((error) => console.log("failed to connect"));

const port = 3005;
server.listen(port, () => {
  console.log("listing on the port ExpressAppCurrencyDemo ", port);
});
