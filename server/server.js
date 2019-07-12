// CONFIG SYSTEM
const PORT = process.env.PORT || '3000';
const API_URL = '/api/';

const EXPRESS = require('express');
const CORS = require('cors');
const API_ROUTES = require('./routes');

const APP = EXPRESS();

APP.use(CORS());
APP.use(EXPRESS.json());
APP.use(API_URL, API_ROUTES);

APP.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});