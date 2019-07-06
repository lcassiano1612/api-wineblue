const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/auth')(app);
require('./app/controllers/product')(app);
require('./app/controllers/getProducts')(app);

app.listen(3000, function() {
  console.log('porta 3000')
});