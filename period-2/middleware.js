/**
 * Created by ChristopherBorum on 08/01/2017.
 */
let express = require('express')
let bodyparser = require('body-parser')
let app = express()

let mLogger = function (req, res, next) {
    console.log(req.method, req.path, new Date().toISOString())
    next()
}


var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(bodyparser.json())
app.use(mLogger)
app.use(requestTime)

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, function () {
    console.log('app listening on 3000')
})