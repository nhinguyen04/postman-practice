const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);
  if (req.method === 'GET' && req.url.startsWith('/static')) {
    const urlArray = req.url.split('/');
    const folder = urlArray[2];
    const file = urlArray[3];
    const type = file.slice(file.indexOf('.') + 1);
    const asset = fs.readFileSync('./assets/' + folder + '/' + file);

    res.statusCode = 200;

    if (file.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css')
    } else {
      res.setHeader('Content-Type', 'image/' + type)
    }

    return res.end(asset)
  }

  // not caught in url handling pattern, send main page
  const mainPage = fs.readFileSync('./index.html');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(mainPage);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
