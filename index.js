// require and initialize express app
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// require dotenv
require('dotenv').config()

// define view engine JSX
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// import router from places.js
app.use('/places', require('./controllers/places'))

// home page
app.get('/', (req, res) => {
    res.render('home')
})

// 404 page
app.get('*', (req, res) => {
    res.render('error404')
})

// GET /places
app.get('/', (req, res) => {
    res.render('places/index')
})

// listen for env port
app.listen(process.env.PORT)