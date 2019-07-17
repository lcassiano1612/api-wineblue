const MYSQL = require('mysql');

const CONNECTION_DB = MYSQL.createConnection({
  host: 'mysql.winebay.com.br',
  user: 'winebay',
  password: 't3w3q0',
  database: 'winebay'
});

module.exports = CONNECTION_DB;