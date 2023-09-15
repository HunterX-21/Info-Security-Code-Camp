const express = require('express');
const app = express();
const helmet = require('helmet');
const path = require('path');

app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action:"deny"}));



















module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", (request, response)=> {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`😊 Your app is listening on port ${port}`);
});
