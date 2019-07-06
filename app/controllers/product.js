const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.post('/product', async (req, res) => { 
  try {
    const product = await Product.create(req.body);
    return res.send({ product });
  } catch(err) {
    return res.status(400).send({
      error: 'Falha ao Criar Produto'
    });
  }
});

module.exports = app => app.use('/create', router);