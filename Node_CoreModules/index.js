const http = require('http');
const url = require('url');
const fs = require('fs');

// Create the HTTP server
const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  // Serve the dashboard page if the URL is "/"
  if (reqUrl.pathname === '/') {
    fs.readFile('dashboard.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(`Error loading dashboard.html: ${err}`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  // Serve the about us page if the URL is "/about"
  } else if (reqUrl.pathname === '/about') {
    fs.readFile('about.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(`Error loading about.html: ${err}`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });

  // Return a 404 error for any other URL
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
