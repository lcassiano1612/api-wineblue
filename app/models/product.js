const mongoose = require('../database');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    lowercase: true
  },
  quantity: {
    type: String,
    require: true,
    lowercase: true
  },
  image: {
    type: String,
    require: true,
    lowercase: true
  },
  price: {
    type: String,
    require: true,
    lowercase: true
  },
  type: {
    type: String,
    require: true,
    lowercase: true
  },
  grapes: {
    type: String,
    require: true,
    lowercase: true
  },
  countryImg: {
    type: String,
    require: true,
    lowercase: true
  },
  countryName: {
    type: String,
    require: true,
    lowercase: true
  },
  region: {
    type: String,
    require: true,
    lowercase: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;