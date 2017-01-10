/**
 * Created by ChristopherBorum on 09/01/2017.
 */
let express = require('express')
let bodyparser = require('body-parser')
let logger = require('morgan')
let helmet = require('helmet')
let path = require('path')
let mongoose = require('mongoose')
let Person = require('./personModel')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/mean-exam')

let app = express()

app.use(bodyparser.json())
app.use(logger('combined'))
app.use(helmet())
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

let peopleRouter = express.Router()

peopleRouter.get('/', (req, res) => {
    console.log(req.body)
    Person.find({}).then(people => {
        res.json(people)
    }).catch(err => {
        console.log(err)
        res.json('error')
    })
})

peopleRouter.post('/', (req, res) => {
    Person.create({
        name: req.body.name,
        age: req.body.age
    }).then(person => {
        res.json(person)
    }).catch(err => {
        console.log(err)
        res.json('error')
    })
})

app.use('/people', peopleRouter)

let port = 3000

app.listen(port, function () {
    console.log(`listening on port ${port}`)
})