const express = require('express');

// Controller
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController'); 

const router = express.Router();

// routes
router.get('/product', getProducts);
router.get('/product/:id', getProduct);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router;