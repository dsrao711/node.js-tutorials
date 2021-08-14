const express = require('express');
const app = express();
// morgan - HTTP request logger middleware for node.js
const morgan = require('morgan')
const mongoose = require('mongoose');

// Connect to Mongo DB

const dburl = 'mongodb+srv://divya:test1234@cluster0.nk5k9.mongodb.net/Blog?retryWrites=true&w=majority'

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// Listen for request


// Set View engine
app.set('view engine', 'ejs')

// Middleware and static files
app.use(morgan('dev'));
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('index', { title: "Brooklyn 999" })
});

app.get('/about', (req, res) => {
    const blogs = [
        { charachter: 'Amy Santiago', name: 'Mellisa Fumero' },
        { charachter: 'Jake Peralta', name: 'Andy Samberg' }
    ]
    res.render('about', { title: "Brooklyn 999" })
});

// Redirects

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 pages

app.use((req, res) => {
    res.status(400).render('404', { title: "Brooklyn 999" })
});