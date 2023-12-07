const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodoverride = require('method-override');
const session = require('express-session');


const app = express();
const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/products')

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodoverride("_method"));
app.use(session({secret: 'secreto de digitaltech'}))

app.use('/', mainRoutes);
app.use('/', userRoutes);
app.use('/product', productRoutes);
app.use((req, res, next) => { 
    res.locals.title ="Página no encontrada"; 

    res.status(404).render('not-found');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});