const express = require('express');
const http = require('http');
const path = require('path');
const parser = require('body-parser');
const { graphqlExpress } = require('apollo-server-express');

const app = express();
const PORT = process.env.PORT || 9000;
const server = http.createServer(app);
const io = require('socket.io')(server);


app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "../client/dist/")));



server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);

  io.on('connection', (socket) => {
    console.log('connected to socket')
  })
})

