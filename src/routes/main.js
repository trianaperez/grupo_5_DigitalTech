const express = require('express');
const mainController = require('../controllers/mainControllers');
const { check } = require('express-validator');
const router = express.Router();

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/product', mainController.product);
router.get('/cart', mainController.cart);
router.get('/register', mainController.register);
router.get('/createForm', mainController.createForm);
router.get('/editForm', mainController.editForm);

router.post('/login', [
    check('email').isEmail().withMessage('Dirección inválida'),
    check('contraseña').isLength({min: 8}).withMessage('Mínimo de caracteres insuficientes')


], usersControllers.proccesLogin);

module.exports = router;
