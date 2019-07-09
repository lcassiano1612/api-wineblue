const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const CONNECTION_DB = require('../db');

ROUTER.get('/info-kits', async (req, res, next) => {
  try {
    let DB = {};
    DB.all = () => {
      return new Promise((resolve, reject) => {
        CONNECTION_DB.query(`SELECT * FROM package`, (err, results) => {
          if (err) {
            return reject(err);
          } else {
            return resolve(results);
          }
        });
      });
    }
    res.json(await DB.all());
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = ROUTER;