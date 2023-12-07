const fs = require('fs');
const userList = require('../data/userList.json');

const path = require('path');
const userFilePath = path.resolve(__dirname, '../data/userList.json');
const {validationResult} = require('express-validator');

const controller = {
    login: (req,res) =>{
       res.locals.title = "Iniciar sesión"; 
       res.render('login');
    },
    register: (req,res) =>{
        res.locals.title = "¡Creá tu cuenta!"; 

        res.render('register');
    },
    newUser:(req, res) =>{
        let errors = validationResult(req);
        if (errors.isEmpty()){
            let userToCreate = {
                        id: userList.length +1,
                        nombre: req.body.name,
                        apellido: req.body.lastname,
                        email: req.body.email,
                        password: req.body.password,
                        profilePic: req.file.filename       }
                    //guardar info//
                    userList.push(userToCreate);
                    fs.writeFileSync(userFilePath, JSON.stringify(userList, null, 2));
                    res.redirect('/')
        }
        else{
         res.render('register', {errors: errors.array(), old: req.body})   
        }
        
    }
}

module.exports = controller;
