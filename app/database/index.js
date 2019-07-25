const SocksConnection = require('socksjs');
const mysql = require('mysql2');
const fixieUrl = process.env.FIXIE_SOCKS_HOST;
const fixieValues = fixieUrl.split(new RegExp('[/(:\\/@)/]+'));

const mysqlServer = {
  host: 'mysql.winebay.com.br',
  port: 3306
};

const dbUser = 'winebay';
const dbPassword = 't3w3q0';
const db = 'winebay';

const fixieConnection = new SocksConnection(mysqlServer, {
  user: fixieValues[0],
  pass: fixieValues[1],
  host: fixieValues[2],
  port: fixieValues[3],
});

const mysqlConnPool = mysql.createPool({
  user: dbUser,
  password: dbPassword,
  database: db,
  stream: fixieConnection
});

module.exports = mysqlConnPool;