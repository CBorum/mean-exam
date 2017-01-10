/**
 * Created by ChristopherBorum on 10/01/2017.
 */
let mongoose = require('mongoose')

let personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Person', personSchema)