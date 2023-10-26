const fs = require('fs');
const productos = require('../data/products.json');

const controller = {
    index(req, res){
        res.render('index');
    },
    login(req,res) {
        res.render('login');
    },
    product(req,res) {
        res.render('product');
    },
    productCart(req,res) {
        res.render('productCart');
    },
    register(req,res) {
        res.render('register');
    }
};



module.exports = controller;