const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  console.log(url, "url is here");

  console.log("server is up");

  //   am i retruning any response back ?

  res.writeHead(202, { "Content-Type": "text/html" });

  res.write("hello world");

  res.end();
});

server.listen(8080, () => {
  console.log("listnig on port no 8080");
});
