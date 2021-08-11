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
    res.sendFile('./views/about.html', { root: __dirname })
});

// Redirects

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 pages

app.use((req, res) => {
    res.status(400).sendFile('./views/404.html', { root: __dirname })
});