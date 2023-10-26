const express = require('express');
const path = require('path');

const app = express();
const mainRoutes = require('./routes/main');

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});