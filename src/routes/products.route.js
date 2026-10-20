const express = require('express');
const productsRoute = express.Router();
const { getAllProducts, getProductbymanufacturer, getProductbysize } = require('../controllers/products.controller');

productsRoute.get('/', getAllProducts);
productsRoute.get('/manufacturer/:manufacturer', getProductbymanufacturer);
productsRoute.get('/size/:size', getProductbysize);

module.exports = productsRoute;