// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello, World!\n')
// })

// server.listen(8000, () => {
//   console.log(`Server running at http://localhost:8000/`)
// })



const express = require("express");
const app = express();

// 設定路由
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 設定伺服器聆聽埠 8000
app.listen(8000, () => {
  console.log('Server running on port 8000');
});
