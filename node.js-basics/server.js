const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request has been made');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>Hello World!</h2>');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000')
});