// require and initialize express app
const express = require('express')
const app = express()

// require dotenv
require('dotenv').config()

// define view engine JSX
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// import router from places.js
app.use('/places', require('./controllers/places'))

// home page
app.get('/', (req, res) => {
    res.render('home')
})

// GET /places
app.get('/', (req, res) => {
    res.render('index')
})

// 404 page
app.get('*', (req, res) => {
    res.render('error404')
})

// listen for env port
app.listen(process.env.PORT)