const greet = (name) => {
    console.log(`hello ${name}`);
}

greet('Divya')

// Differences
// 1. Global object

console.log(global);
global.setTimeout(() => {
    console.log('in the timeout')
    clearInterval(int)
}, 3000);

const int = setInterval(() => {
    console.log('In the interval');
}, 1000)


// To get the file and directory name

console.log(__dirname);
console.log(__filename);