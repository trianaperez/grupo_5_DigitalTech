const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/', mainRoutes);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/cart', (req,res) => {
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/product', (req,res) => {
    res.sendFile(__dirname + '/views/product.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});