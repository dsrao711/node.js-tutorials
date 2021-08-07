// Os module

// const os = require('os');
// console.log(os.homedir());

const fs = require('fs')

// reading files
// fs.readFile('./docs/test.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString())
// });

// writing files
fs.writeFile('./docs/test.txt', 'Hello world!', () => {
    console.log('Writen')
});

fs.writeFile('./docs/test_2.txt', 'Hello world!', () => {
    console.log('Writen')
});
// directories

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Folder created')
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log('Error')
        }
        console.log('Folder deleted')
    })
}

// deleting files