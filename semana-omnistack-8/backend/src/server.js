const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://philmeneghini:10984@cluster0-4aw4i.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);