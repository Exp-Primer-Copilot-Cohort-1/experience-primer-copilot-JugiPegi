// Create web server
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/comments') {
//     res.write('Hello, this is the comments page');
//     res.end();
//   }
// });

// server.listen(3000);

// Path: comments.js
// Create web server with express
const express = require('express');

const app = express();

app.get('/comments', (req, res) => {
  res.send('Hello, this is the comments page');
});

app.listen(3000);