const http = require("http");

const htmlBody =
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>`;

const server = http.createServer((req, res) => {
    res.setHeader("Content_Type", "text/html");
    res.statusCode = 200;
    res.end(htmlBody);
})

const port = 4000;
const hostName = '127.0.0.1';

server.listen(port, hostName, () => {
    console.log(`Server running on port ${port}`);
})
