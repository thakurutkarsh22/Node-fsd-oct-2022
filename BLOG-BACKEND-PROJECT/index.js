//  Main file My server lies here, all request basically 1st arrives here

// ---------- IMPORTS ----------------

const blogRoutes = require("./routes/blogs.routes");
const authRoute = require("./routes/auth.routes");

const express = require("express");
const server = express();
const mongoose = require("mongoose");

// change req to json ...
server.use(express.json());

// Register routes

server.use("/api/v1/auth", authRoute);
server.use("/api/v1/blogs", blogRoutes);
// server.use("/api/v1/tags", tagsRoutes);
// server.use('/api/v1/profile', profileRoutes)

// Auth....

// Connection to Mongo DB

const dburl = "mongodb://127.0.0.1:27017";
mongoose
  .connect(dburl + "/blogBackendProject")
  .then((data) => {
    console.log("My db is connected");
  })
  .catch((error) => console.log("failed to connect"));

const port = 3005;
server.listen(port, () => {
  console.log("listing on the port ExpressAppCurrencyDemo ", port);
});
