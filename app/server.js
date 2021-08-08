const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('Request has been made')
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.end(data)
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000')
})