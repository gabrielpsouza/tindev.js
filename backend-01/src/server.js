const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


const server = express();

mongoose.connect('mongodb+srv://admin:teste@cluster0-bivna.mongodb.net/tindev?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
 
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);