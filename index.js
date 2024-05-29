// require and initialize express app
const express = require('express')
const app = express()
// require dotenv
require('dotenv').config()
// import router from places.js
app.use('/places', require('./controllers/places'))
// callback function
app.get('/', (req, res) => {
    res.send('Hello world!')
})
// 404 page
app/get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
// listen for env port
app.listen(process.env.PORT)