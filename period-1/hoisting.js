/**
 * Created by ChristopherBorum on 08/01/2017.
 */

//runtime:
//var a = undefined;
//var b = undefined;

console.log(a)
console.log(b)
console.log(a+b)
var a = 1
var b = 2
console.log(a+b)
// var a and b are declared at the top of the scope at runtime, because of hoisting -> it won't throw exceptions

foo()

function foo() {
    console.log('foo')
}
// function definition hoisting only occurs for function declarations, not function expressions

bar()

var bar = function () {
    console.log('bar')
}
// doesn't work because at runtime the 'var' is declared at the top and not the functioin definition
