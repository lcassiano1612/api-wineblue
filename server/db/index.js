const MYSQL = require('mysql');

const CONNECTION_DB = MYSQL.createPool({
  connectionLimit: 10,
  user: 'winebay',
  password: 't3w3q0',
  database: 'winebay',
  host: 'mysql.winebay.com.br',
  port: '3306'
});


module.exports = CONNECTION_DB;