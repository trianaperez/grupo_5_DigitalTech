require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const mainRoutes = require('./routes/main');
const Sequelize = require('sequelize');
const multer = require('multer');
const upload = multer({dest: '/uploads'});


app.use(express.static(path.resolve(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded( {extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({secret: process.env.SECRET}));
app.use('/', mainRoutes);
app.use((req, res, next) => { 
    res.status(404).render('not-found');
})

app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});