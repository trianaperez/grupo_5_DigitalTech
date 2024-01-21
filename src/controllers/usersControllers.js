const bcrypt = require('bcrypt');
const fs = require('fs');

let {check, validationResult, body} = require('express-validator');
const { error } = require('console');

let usersControllers = {
    register: function(req, res) {
        return res.render('register');
        },
    login: function(req, res){
        return res.render('login')
    },
    processLogin: function (req, res){
        let errors = validationResult(req);
        if (errors.isEmpty()){

        }else {
            return res.render('login', {errors: errors.errors})
        }
    }    

}
