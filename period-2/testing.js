/**
 * Created by ChristopherBorum on 08/01/2017.
 */
const assert = require('assert')
const fetch = require('node-fetch')

describe('Array', function () {
    describe('#indexOf', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1, 'did not return -1')
        })
    })
})

describe('Fetch', function () {
    describe('fetch google', function () {
        it('should get text from google.com', function (done) {
            fetch('https://google.com').then(res => {
                return res.text()
            }).then(text => {
                assert.equal(true, text.length > 0)
                done()
            })
        })
    })
})

// can be shorter
describe('Fetch', function () {
    describe('fetch google', function () {
        it('should get text from google.com', function (done) {
            fetch('https://google.com')
                .then(res => done())
                .catch(err => done(err))
        })
    })
})