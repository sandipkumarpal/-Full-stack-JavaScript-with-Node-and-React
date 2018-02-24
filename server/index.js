const http = require('http');
const fs = require('fs');
const server = http.createServer();

const express = require('express');

// server.on('request', (req, res) => {
//     // res.write("hello World");
//     // setTimeout(() => {
//     //     res.write('Still on.....');
//     //     res.end(); 
//     // });
//     res.end(fs.readFileSync(__dirname + '/../client/index.html'));
// });

// server.listen(9000);

const app = express();
app.use(express.static('client'));


app.listen(9000);


