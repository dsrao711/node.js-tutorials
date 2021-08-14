// Query selector
const error_div = document.querySelector('div.error')

// From ELements 
const div = document.querySelector('body > div > p:nth-child(2)')

//All
const params = document.querySelectorAll('p')
const params = document.getElementsByTagName('p')

// console.log(params)
// console.log(params[1])

params.forEach(param => {
    console.log(param);
})

// Change inner text

const p = document.querySelector('p')
p.innerText = ('Hi , divya here!')

const paras = document.querySelectorAll('p')

paras.forEach(para => {
    console.log(para.innerText)
    para.innerText += ' inner text changed'
});

// Change Inner Html

const content = document.querySelector('.content')

// content.innerHTML = '<H2>This is new inner HTML</H2>'

const people = ['Divya', 'Person1', 'Person2'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
})

const title = document.querySelector('h2')

title.setAttribute('style', 'color:yellow;')