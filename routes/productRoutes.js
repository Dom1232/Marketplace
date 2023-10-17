const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Get all products
router.get('/api/product', productController.getAllProducts);

// Get product by ID
router.get('/api/product/:id', productController.getProductById);

// Add new product
router.post('/api/product', productController.addProduct);

// Update product by ID
router.put('/api/product/:id', productController.updateProductById);

// Remove product by ID
router.delete('/api/product/:id', productController.removeProductById);

// Remove all products
router.delete('/api/product', productController.removeAllProducts);

// Find products by name containing 'kw'
router.get('/api/product', productController.findProductsByName);

module.exports = router;