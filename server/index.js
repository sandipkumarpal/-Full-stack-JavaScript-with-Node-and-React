const http = require('http');
const fs = require('fs');
const server = http.createServer();

const express = require('express');

const app = express();
app.use(express.static('client'));
app.set('view engine', 'ejs');

import serverRender from './render';

app.get('/', (req, res) => {
    res.render('index', {
        content: serverRender()
    });
});


app.listen(9000, () => console.log('Server is Runing...'));


