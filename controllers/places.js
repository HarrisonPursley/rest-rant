const app = require('express').Router()

app.get('/new', (req, res) => {
    res.render('places/new')
})

app.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://placehold.co/250'
    }, {
        name: 'Steiner\'s Bar and Grille',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'North American, German, Italian',
        pic: 'https://placehold.co/250'
    }]
    res.render('places/index', { places })
})

module.exports = app