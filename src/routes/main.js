const express = require('express');
const mainController = require('../controllers/mainControllers');
const router = express.Router();

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/product', mainController.product);
router.get('/productCart', mainController.productCart);
router.get('/register', mainController.register);

module.exports = router;
