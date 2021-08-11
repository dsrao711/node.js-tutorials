const express = require('express');

const app = express();

// Listen for request
app.listen(3000);

// Set View engine

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about')
});

// Redirects

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 pages

app.use((req, res) => {
    res.status(400).render('404')
});