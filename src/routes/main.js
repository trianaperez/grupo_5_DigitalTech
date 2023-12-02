const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers');

router.get('/product', mainController.product);
router.get('/cart', mainController.cart);
router.get('/createForm', mainController.createForm);
router.get('/editForm', mainController.editForm);


module.exports = router;
