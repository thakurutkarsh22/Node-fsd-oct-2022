const fs = require("fs");

// create a file

// fs.appendFile("file.txt", "Hello Node js world !!! \n", (error) => {
//   if (error) console.log(error);
//   else console.log("file created successfully");
// });

// update

// fs.appendFile("file.txt", "\n Hello guys welcome to Node js", (error) => {
//   if (error) console.log(error);
//   else console.log("appended successfully");
// });

// ----  reading the file

// fs.readFile("file.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("heres my file ");
//     console.log(data.toString());
//   }
// });

// delete the file

// fs.unlink("file.txt", (error) => {
//   if (error) {
//     console.log("File not deleted");
//   } else {
//     console.log("file is deleted");
//   }
// });

// -----------------------  Asyncronous   --------------------------------

// console.log("hello 1");

// fs.readFile("file.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("heres my file ");
//     console.log(data.toString());

// email to the ops manager
//   }
// });

// console.log("end work");

//  -------------------------------- Synchronous ----------------------

// console.log("hello");

// const data = fs.readFileSync("file.txt");
// console.log(data.toString());

// console.log("end");

// question read product.josn in data folder

const productFile = `${__dirname}/data/product.json`;
const productFileData = fs.readFileSync(productFile);
console.log("productFileData", productFileData.toString());
