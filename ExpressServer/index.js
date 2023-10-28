const express = require("express");
const server = express();

// ROTUES and MEHTODS ...

// use means every HTTP METHOD (GET, POST, PUT, DELETE, OPTIONS, etc...)

server.get("/", (req, res) => {
  res.statusCode = 200;
  res.write("<h1>Hello gys welcome to the palace!!! Express Server</h1>");
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

// Handle 404 not found

server.use((req, res) => {
  res.statusCode = 404;
  res.end("<h1>404 Not found so someplace else</h1>");
});

const port = 3005;
server.listen(port, () => {
  console.log("listing on the port", port);
});
