const bcrypt = require('bcrypt');
const fs = require('fs');

let {check, validationResult, body} = require('express-validator');
const { error } = require('console');

const { validationResult } = require('express-validator');

//ESTO NO ANDA
/* let usersControllers = {
    register: function(req, res) {
        return res.render('register');
    },
    login: function(req, res){
        return res.render('login');
    },
    processLogin: function (req, res){
        let errors = validationResult(req);
        if (errors.isEmpty()){
            // Agrega aquí la lógica para el inicio de sesión exitoso
            return res.redirect('/dashboard');
        } else {
            return res.render('login', {errors: errors.errors});
        }
    }
}; */

const { validationResult } = require('express-validator');

const controller = {
    index(req, res) {
        return res.render('user', { user: req.user });
    },
    create(req, res) {
        return res.render('userCreate');
    },
    store(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('userCreate', { 
                errors: errors.mapped(),
                oldData: req.body
            });
        }
        return res.send({...req.body, img: req.file.filename});
    }
};

module.exports = controller;