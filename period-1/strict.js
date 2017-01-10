'use strict';

(function (numb) {
    'use strict'; // strict can also be used for a function only
    var inner = 3
    console.log(numb + inner)
})(123)

// %undeclared variables
var a = 1
var b = 2 // throws error

console.log(a + b)

// %delete throws error in strict mode if you try to delete global variabels
// console.log(delete a)

var c = {
    foo: "bar",
    bar: "foo"
}

console.log(c)
// delete is only ment for user-defined variables
delete c.foo

console.log(c)

// Duplicate parameter name not allowed in this context
// function print(value, value) {}

// instrict mode some keywords are restricted: implements, interface, package, private, protected, public, static, yield.
// var private = 123

// this will be undefined in global functions
function checkforthis(){
    // console.log(this) //will print undefined.
}
checkforthis()

// in strict mode eval cannot create variables in its scope
eval("var q = 12")
// console.log(q) //q is not defined.