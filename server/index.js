const http = require('http');
const fs = require('fs');
const server = http.createServer();

const express = require('express');
// import cors from 'cors';

import apiRouter from './apiRouter';
// app.use('/api', apiRouter);
// app.user(cors());

const app = express();
app.use(express.static('client'));
app.set('view engine', 'ejs');

import serverRender from './render';

app.get('/', (req, res) => {
    serverRender().then(renderDate => 
        res.render('index', {
            markup: renderDate.markup,
            initialData: renderDate.data
        })
    );
});


app.listen(9000, () => console.log('Server is Runing...'));


