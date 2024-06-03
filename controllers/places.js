const app = require('express').Router()
const places = require('../models/places.js')

app.get('/new', (req, res) => {
    res.render('places/new')
})

app.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        req.body.pic = 'https://placehold.co/250'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

app.get('/', (req, res) => {
    let places = []
    res.render('places/index', { places })
})

app.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else{
        res.render('places/show', { place: places[id] })
    }
})

module.exports = app