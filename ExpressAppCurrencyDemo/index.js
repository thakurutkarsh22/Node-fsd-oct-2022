const mongoose = require("mongoose");
const express = require("express");
const server = express();

const currencyRoutes = require("./routes/currencies.routes");
const blogRoutes = require("./routes/blog.routes");

// in here we can authenticate
// listen to events

// middle ware changing req to JSON REQ

server.use(express.json());

// I am Regestring ROUTES (which is kind of middleware)

server.use("/currencies", currencyRoutes);
server.use("/blog", blogRoutes);

//  --------- CONNECT TO DATABASE ---------------

const dburl = "mongodb://127.0.0.1:27017";
mongoose
  .connect(dburl)
  .then((data) => {
    console.log("My db is connected");
  })
  .catch((error) => console.log("failed to connect"));

const port = 3005;
server.listen(port, () => {
  console.log("listing on the port ExpressAppCurrencyDemo ", port);
});
