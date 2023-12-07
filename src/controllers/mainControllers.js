const fs = require('fs');
const productos = require('../data/products.json');

const controller = {
    index: (req, res) => {
        res.locals.title = "¡Bienvenido a Digital Tech!"; 
        res.render('index');
    },
    
    product: (req,res) =>{
        res.locals.title = "Digital Tech"; 

        res.render('product');
    },
    cart: (req,res)=> {
        res.locals.title = "Tu carrito"; 
        res.render('productCart');
    },
    
    createForm:(req,res) => {
        res.render('createForm');
    },
    editForm:(req,res) => {
        res.render('editForm');
    }
};



module.exports = controller;