const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wineblue', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;