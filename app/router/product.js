const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const DB = require('../database');

ROUTER.get('/', (request, result, next) => {
  DB.getConnection(function gotConnection(err, connection) {
    console.log('opa');

    console.log(err);
  
    queryVersion(connection);
  });
  
  function queryVersion(connection) {
    connection.query('SELECT version();', function (err, rows, fields) {
  
        if (err) throw err;
  
        console.log('MySQL/MariaDB version: ', rows);
        connection.release();
        // process.exit();
    });
  }

});

module.exports = ROUTER;