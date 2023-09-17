const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});
const port = 3030;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});