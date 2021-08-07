const fs = require('fs')

const readStream = fs.createReadStream('./docs/streams.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/writeStream.txt');


readStream.on('data', (chunk) => {
    console.log('-------new chunk-------');
    console.log(chunk);
    writeStream.write('\nNewStream\n');
    writeStream.write(chunk);
})