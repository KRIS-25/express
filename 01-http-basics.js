const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   console.log(req.method); // GET || POST
  //   console.log(req.url);

  const url = req.url;

  // home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  }

  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }

  // error page 404
  else {
    res.writeHead(404, {
      statusMessage: "Error Cannot Find",
      "content-type": "text/html",
    });
    res.write("<h1>Error Page</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log(`Server listening on port on 5000...`);
});
