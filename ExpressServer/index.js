const express = require("express");
const server = express();

// ROTUES and MEHTODS ...

// use means every HTTP METHOD (GET, POST, PUT, DELETE, OPTIONS, etc...)

server.get("/", (req, res) => {
  res.statusCode = 200;
  res.write("<h1>Hello gys welcome to the palace!!! Express Server</h1>");
  // res.json();
  res.end();

  // calcucation

  // call the database ...
  // get the info from data ...
});

server.get("/about", (req, res) => {
  res.statusCode = 200;
  res.end("<h1>About: we are a nice company!!</h1>");

  // call the dabase and get the data
});

// server.get("/blog/all")
// server.get("/blog/edit")
// server.get("/blog/:id")

// Handle 404 not found

server.use((req, res) => {
  res.statusCode = 404;
  res.end("<h1>404 Not found so someplace else</h1>");
});

const port = 3005;
server.listen(port, () => {
  console.log("listing on the port", port);
});

// Responsibility of this file
// 1. Make server and start it (index.js)
// 2. Register routes and methods. (routes foleder), big routes can be registered in Index.js
// 3. Make Handlers for route and Methods.. (Controller folder)

// 4. Authentication and authrozarion ()
// 5. Calling the database and logic  (Model/service)
