// Query selector
const error_div = document.querySelector('div.error')

// From ELements 
const div = document.querySelector('body > div > p:nth-child(2)')

//All
const params = document.querySelectorAll('p')

console.log(params)
console.log(params[1])

params.forEach(param => {
    console.log(param);
})