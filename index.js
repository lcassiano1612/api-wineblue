const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('OK Lucas');
});

app.listen(3000);