const express = require('express');
const http = require('http');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 9000;
const server = http.createServer(app);
const io = require('socket.io')(server);


app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "../client/dist/")));

// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);

  io.on('connection', (socket) => {
    console.log('connected to socket')
  })
})


// GET /status
// app.get('/', function(req, res) {
//   res.sendFile(__dirname, '../client/dist/index.html')
// })

// io.on('connection', () => console.log('a user connected'));




// app.use('/', router);


// Socket setup
// let io = socket(server);

// io.on('connection', (socket) => {
//   console.log('connected to socket')
// })