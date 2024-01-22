const { body } = require('express-validator');

const createUserValidation = [
    body('nombre')
        .notEmpty().withMessage('Campo requerido')
        .isLength({ min: 8 }).withMessage('Mínimo de caracteres insuficientes'),
    body('apellido')
        .notEmpty().withMessage('Campo requerido')
];

module.exports = {
    createUserValidation
}