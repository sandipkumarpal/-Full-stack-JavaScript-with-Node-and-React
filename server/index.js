const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.write("hello World");
    setTimeout(() => {
        res.write('Still on.....');
        res.end(); 
    });
    
});

server.listen(9000);
