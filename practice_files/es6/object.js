const product = {
    name: 'Laptop',
    cost: 50000,
    brand: 'Lenovo'
}


// Object de structuring 
const { name: newName, cost: newCost } = product

console.log(newName)

// Application
const transaction = (type, { name, cost }) => {
    console.log(type, name, cost)
}

transaction('order', product)