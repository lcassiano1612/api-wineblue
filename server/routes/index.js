const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

const CONNECTION_DB = require('../db');

    
getProductWinehouse = () => {
  return new Promise((resolve, reject) => {
    CONNECTION_DB.query(` SELECT 
                            a.id,
                            a.name,
                            a.graduation,
                            b.price,
                            c.name as name_country,
                            d.name as name_winehouse,
                            e.path as image
                          FROM 
                            product a, 
                            winehouse_product b,
                            country c,
                            winehouse d,
                            image e
                          WHERE 
                            a.id = b.id_product 
                            and
                            e.id = a.id_image_thumb
                            and
                            c.id = a.id_country
                            and 
                            d.id = b.id_winehouse

                      `, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }            
    });
  });
}

// GET INFO PACKAGE FOR MOUNT KITS
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

//LIST PRODUCTS
ROUTER.get('/products/list', async (req, res, next) => {
  try {
    res.json(await getProductWinehouse());
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = ROUTER;