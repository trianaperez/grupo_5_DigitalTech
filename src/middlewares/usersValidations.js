const { body } = require('express-validator');

const createUserValidation = [
    body('firstName')
        .notEmpty().withMessage('Campo requerido')
        .isLength({ min: 8 }).withMessage('Mínimo de caracteres insuficientes'),
    body('lastName')
        .notEmpty().withMessage('Campo requerido')
];

const loginValidator = [
    body('email').isEmail().withMessage('Dirección inválida'),
    body('password').isLength({ min: 8 }).withMessage('Mínimo de caracteres insuficientes')
]

module.exports = {
    createUserValidation, loginValidator
}