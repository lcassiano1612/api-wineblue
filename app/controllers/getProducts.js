const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.get('/products', async (req, res) => { 
  try {
    const products = await Product.find();
    return res.send({ products });
  } catch(err) {
    return res.status(400).send({
      error: 'Falha ao listar os produtos'
    });
  }
});

module.exports = app => app.use('/list', router);