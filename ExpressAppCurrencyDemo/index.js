const mongoose = require("mongoose");
const express = require("express");
const server = express();

const currencyRoutes = require("./routes/currencies.routes");

// in here we can authenticate
// listen to events

//  --------- CONNECT TO DATABASE ---------------

const dburl = "mongodb://127.0.0.1:27017";

mongoose
  .connect(dburl)
  .then((data) => {
    console.log("My db is connected");
  })
  .catch((error) => console.log("failed to connect"));
// I am Regestring ROUTES

server.use("/currencies", currencyRoutes);
// server.use("/blog");

const port = 3005;
server.listen(port, () => {
  console.log("listing on the port ExpressAppCurrencyDemo ", port);
});
