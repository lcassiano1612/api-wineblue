// CONFIG SYSTEM
const PORT = process.env.PORT || '3000';
const API_URL = '/api/';

// IMPORTS CONFIG
const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const CORS = require('cors');
const API_ROUTES = require('./routes');

const APP = EXPRESS();

APP.use(CORS());
APP.use(EXPRESS.json());
APP.use(API_URL, API_ROUTES);
APP.use(BODY_PARSER.json());
APP.use(BODY_PARSER.urlencoded({extended: true}));
APP.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


APP.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});