/**
 * Created by ChristopherBorum on 11/01/2017.
 */
let co = require("co")

// generators
function *test() {
    let a = yield 1;
    let b = yield 2;
    let c = yield 3;
    return 123
}

var t = test()
console.log(t.next()) // { value: 1, done: false }
console.log(t.next()) // { value: 2, done: false }
console.log(t.next()) // { value: 3, done: false }
console.log(t.next()) // { value: 123, done: true }

// iterator
function *iterator() {
    let count = 0
    while (true) {
        yield count++
        console.log(count)
    }
}
var i = iterator()
console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())

// mats example
function promiseFactory(val){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve(val*2);
        })
    },1000);
};
function asyncFunc(url) {
    return promiseFactory(url).then(data => {
        tt.next(data)
    })
}
function *test() {
    let v1 = yield asyncFunc(2);
    let v2 = yield asyncFunc(v1);
    let v3 = yield asyncFunc(v2);
    let res = yield asyncFunc(v3);
    console.log(res);
}
var tt = test();
tt.next()

// with co
co(function* () {
    var result = yield Promise.resolve(true);
    return result;
}).then(function (value) {
    console.log(value);
}, function (err) {
    console.error(err.stack);
});