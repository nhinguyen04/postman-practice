const http = require('http');

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }
    // Do not edit above this line

    // define route handlers here
    const splitURL = req.url.toString().split('/');
    if (req.method === 'GET') {
      if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        return res.end('Dog Club');
      }

      if (splitURL[1] === 'dogs') {
        if (splitURL.length === 2) {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          return res.end('Dogs index');
        }

        if (splitURL.length === 3) {
          if (splitURL[2].toLowerCase() === 'new') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            return res.end('Dog create form page');
          }

          // can also check dog detail with :dogID here
        }
      }
    }

    if (req.method === 'POST') {
      // similarly handle POST requests here
    }

    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No matching route handler found for this endpoint');
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
