const express = require('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

router.get('/', mainController.main);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/product', mainController.product);
router.get('/productCart', mainController.productCart);

module.exports = router;