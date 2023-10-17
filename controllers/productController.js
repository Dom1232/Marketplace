const Product = require('../models/product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
  }
};

// Add new product
exports.addProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
  }
};

// Update product by ID
exports.updateProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
  }
};

// Remove product by ID
exports.removeProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product removed successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' });
  }
};

// Remove all products
exports.removeAllProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.json({ message: 'All products removed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Find products by name containing 'kw'
exports.findProductsByName = async (req, res) => {
  try {
    const keyword = req.query.name;
    const products = await Product.find({ name: { $regex: keyword, $options: 'i' } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};