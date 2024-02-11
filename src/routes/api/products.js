const express = require('express');

const router = express.Router();

const productsAPIController = require('../../controllers/api/productsAPIController');

router.get('/products/:id', productsAPIController.detail);

router.get('/products', productsAPIController.list); 

router.get('/search', productsAPIController.search);


module.exports = router;