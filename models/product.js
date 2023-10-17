const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: {
    type: String,
    enum: ['Men', 'Women', 'Teens'],
    required: true
  }
});

const Product = mongoose.model('Product', productSchema, 'product');

module.exports = Product;