const express = require('express');

const app = express();

// Listen for request
app.listen(3000);

// Set View engine

app.set('view engine', 'ejs')


app.get('/', (req, res) => {

    res.render('index', { title: "Brooklyn 999" })
});

app.get('/about', (req, res) => {
    const blogs = [
        { charachter: 'Amy Santiago', name: 'Mellisa Fumero' },
        { charachter: 'Jake Peralta', name: 'Andy Samberg' }
    ]
    res.render('about', { blogs })
});

// Redirects

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 pages

app.use((req, res) => {
    res.status(400).render('404')
});