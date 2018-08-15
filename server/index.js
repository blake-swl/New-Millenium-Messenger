const express = require('express');
const path = require('path');
const parser = require('body-parser');
const socket = require('socket.io');

const router = express.Router();

const app = express();
const PORT = process.env.PORT || 9000;

// GET /status
// router.get('/status', function(req, res) {
//   res.json({ status: 'App is running!' })
// })


app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use('/', router);
app.use(express.static(path.join(__dirname, "../client/dist/")));

let server = app.listen(PORT, () => { console.log(`Listening on PORT ${PORT}`)});

// Socket setup
let io = socket(server);

io.on('connection', (socket) => {
  console.log('connected to socket')
})