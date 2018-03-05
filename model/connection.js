var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodewebappdbwebsocket');

var connectionOne = mongoose.connection;
module.exports = connectionOne;
