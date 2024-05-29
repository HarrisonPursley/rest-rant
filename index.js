// declare and initialize express app
const config = require('express')
const app = express()
// callback function
app.get('/', (req, res) => {
    res.send('Hello world!')
})
// listen for port 3000
app.listen(3000)