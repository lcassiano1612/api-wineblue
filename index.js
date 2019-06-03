const express = require('express');
const app = express();
const router = express.Router();

app.get('/', function(req, res) {
  res.send('hello world!');
});

app.get('/products', function(req, res) {
  res.send('Listar produtos!');
});

app.post('/register', function(req, res) {
  res.send('registrar usario');
});

app.listen(3000, function() {
  console.log('porta 3000')
});