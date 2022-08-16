const express = require("express");
const app = express();

const PORT = 8081;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} ${new Date().toISOString()}`);
  next();
});

app.get("/home", (req, res) => {
  res.json({ javascript: "object" });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error at a servers launch: ", err);
  }
  console.log(`Server works at port ${PORT}!`);
});
///////////////////////////////////////////////////////////////////////////////////
// const express = require("express");
// const app = express();

// const PORT = 8081;

// app.get("/home", (req, res) => {
//   res.send("get request");
// });
// app.post("/home", (req, res) => {
//   res.send("post request");
// });
// app.delete("/home", (req, res) => {
//   res.send("delete request");
// });
// app.use((req, res) => {
//   res.send("middleware request");
// });

// app.listen(PORT, (err) => {
//   if (err) {
//     console.error("Error at a servers launch: ", err);
//   }
//   console.log(`Server works at port ${PORT}!`);
// });
// ///////////////////////////////////////////////////////////////////////////////////
// const http = require("http");
// const fs = require("fs").promises;

// const PORT = 8081;

// const requestHandler = async (request, response) => {
//   const data = await fs.readFile("./2/index.html", "utf8");

//   response.writeHead(200, { "Content-type": "text/html" });
//   response.end(data);
// };

// const server = http.createServer(requestHandler);

// server.listen(PORT, (err) => {
//   if (err) {
//     console.error("Error at a servers launch: ", err);
//   }
//   console.log(`Server works at port ${PORT}!`);
// });
///////////////////////////////////////////////////////////////////////////////////
// const http = require("http");

// const PORT = 8081;

// const requestHandler = (request, response) => {
//   response.writeHead(200, { "Content-type": "text/html" });
//   response.end(data);
//   //   response.writeHead(200, { "Content-type": "text/json" });
//   //   response.end(JSON.stringify({ a: 1, b: [1, 26] }));
//   //   response.writeHead(200, { "Content-type": "text/html" });
//   //   response.end("<h1>Go work, Oleg!</h1>");
// };

// const server = http.createServer(requestHandler);

// server.listen(PORT, (err) => {
//   if (err) {
//     console.error("Error at a servers launch: ", err);
//   }
//   console.log(`Server works at port ${PORT}!`);
// });
