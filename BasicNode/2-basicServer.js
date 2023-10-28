const http = require("http");

const server = http.createServer(() => {
  console.log("server is up");
});

server.listen(8080, () => {
  console.log("listnig on port no 8080");
});
