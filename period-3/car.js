/**
 * Created by ChristopherBorum on 09/01/2017.
 */
let mongoose = require('mongoose')

let carSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    year: Number
})

module.exports = mongoose.model('Car', carSchema)