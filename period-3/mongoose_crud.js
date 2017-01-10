/**
 * Created by ChristopherBorum on 09/01/2017.
 */
let mongoose = require('mongoose')
let co = require('co')
mongoose.Promise = global.Promise

let Car = require('./car')

mongoose.connect('mongodb://localhost:27017/mean-exam')

mongoose.connection.on('connected', function () {
    console.log('mongoose connected to db')
    co(function *() {
        // create
        let car = yield Car.create({
            model: 'BMW X6',
            year: 2010
        })
        console.log(car) //created object
        console.log('-----')

        // read
        let car2 = yield Car.find({
            'model': 'BMW X6'
        }, 'model year')
        console.log(car2) //array of matched cars (only model and year)
        console.log('-----')

        let car22 = yield Car.find({'model': /BMW/})
            .where('year').gt(2000)
        console.log(car22)
        console.log('-----')

        // update
        let car3 = yield Car.findOneAndUpdate({
            'model': 'BMW X6'
        }, {
            'model': 'BMW X7'
        }, {new: true})
        console.log(car3)
        console.log('-----')

        // delete
        let car4 = yield Car.remove({
            'year': 2010
        })
        console.log(car4 !== undefined)
        console.log('-----')

        mongoose.connection.close()
    }).catch(err => {
        console.log('err', err)
    })
})

mongoose.connection.on('error', function (err) {
    console.log('err', err)
})

mongoose.connection.on('disconnected', function () {
    console.log('mongoose disconnected')
})

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('mongoose disconnected, app termination')
        process.exit(0)
    })
})