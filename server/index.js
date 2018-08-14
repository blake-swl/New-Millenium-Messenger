const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(PORT, () => { console.log(`Listening on PORT ${PORT}`)});