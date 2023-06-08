const http = require("http");

const server = http.createServer((req, res) => {
  //We can't send two response for a single request
  // So in order to not get error
  // We have two option 1. use if, else if,else or return statement
  if (req.url === "/") {
    res.end("Welcome to our home page.");
  } else if (req.url === "/about") {
    res.end("Here is our sort about.");
  } else {
    res.end(`
    <h1>Oops!!</h1>
    <p>We can't seem to find the page your are looking for</p>
    <a href="/">Back to home</a>
    `);
  }
});

server.listen(5000);
