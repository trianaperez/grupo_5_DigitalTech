const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const multer = require('multer');
const path = require('path');
const {check, body } = require('express-validator');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve(__dirname, '../public/img/usersPictures')) 
    },
    filename: (req, file, callback) => {
        const newFileName = 'user-' + Date.now() + path.extname(file.originalname);
        callback(null, newFileName);
    }
   
});
 const upload = multer({storage: storage})

 const validateRegister = [
    check('name').notEmpty().withMessage('Debés completar tu nombre'),
    check('lastname').notEmpty().withMessage('Falta agregar tu apellido'),
    check('email').isEmail().withMessage('Ingresá un email válido'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 carácteres')
 ]

router.get('/register', userController.register);
router.post('/register', upload.single('profilePic'), validateRegister, userController.newUser);
router.get('/login', userController.login);
router.post('/login');

module.exports = router;