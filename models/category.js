const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
  name: String
});

const Category = mongoose.model('Category', categoriesSchema);

module.exports = Category;