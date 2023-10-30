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
    },
    /*createForm(req,res) {
        res.render('createForm');
    },
    editForm(req,res) {
        res.render('editForm');
    }*/
};



module.exports = controller;