const express = require('express');
const mainController = require('../controllers/mainControllers');
const usersControllers = require('../controllers/usersControllers');
const {loginValidator} = require('../middlewares/usersValidations');
const router = express.Router();

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/product', mainController.product);
router.get('/cart', mainController.cart);
router.get('/register', mainController.register);
router.get('/createForm', mainController.createForm);
router.get('/editForm', mainController.editForm);

router.post('/login',  loginValidator, usersControllers.processLogin);

module.exports = router;
