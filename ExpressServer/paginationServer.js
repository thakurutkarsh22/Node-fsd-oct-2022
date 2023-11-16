const express = require("express");
const server = express();

const data = Array.from({ length: 100 }, (_, i) => `Item No. ${i}`);

server.get("/", (req, res) => {
  const { page } = req.query;

  const itemPerPage = 10; // you can get this thing with config
  const offset = itemPerPage * (page - 1);
  const limit = itemPerPage;

  // call DB and getting the data ..... offset

  const itemLength = data.length;
  const totalPages = Math.ceil(itemLength / itemPerPage);

  // IN PRODUCITON YOU ARE NOT GOING TO DO THIS....

  const fliteredData = data.slice(offset, offset + limit); // you have to implement that logic...

  res.send({
    data: fliteredData,
    currentPage: page,
    totalPages: totalPages,

    limit: limit,
    totalItems: itemLength,
  });
});

const port = 3005;
server.listen(port, () => {
  console.log("listing on the port", port);
});
