const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products
router.get('/api/products', productController.getAllProducts);

// Get product by ID
router.get('/api/products/:id', productController.getProductById);

// Add new product
router.post('/api/products', productController.addProduct);

// Update product by ID
router.put('/api/products/:id', productController.updateProductById);

// Remove product by ID
router.delete('/api/products/:id', productController.removeProductById);

// Remove all products
router.delete('/api/products', productController.removeAllProducts);

// Find products by name containing 'kw'
router.get('/api/products', productController.findProductsByName);

module.exports = router;