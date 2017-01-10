/**
 * Created by ChristopherBorum on 08/01/2017.
 */

function foo(callback) {
    var a = 1 + 2
    callback(a)
}

foo(number => console.log(number))

// or we can

function bar(number) {
    console.log(number)
}

foo(bar)

let names = ['kurt', 'ole', 'bo', 'ib']

names.forEach(name => {
    console.log(name)
})

console.log('-----')

/*function mForEach(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

mForEach(names, (name) => {
    console.log(name)
})*/

function mForEach(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}

Array.prototype.mForEach = mForEach

names.mForEach(name => {
    console.log(name)
})