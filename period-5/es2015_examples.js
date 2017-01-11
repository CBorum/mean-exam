/**
 * Created by ChristopherBorum on 11/01/2017.
 */

// Let
// "var" is function scoped
// while "let" is scoped to the block where it is defined and the sub-blocks
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let
varTest()
letTest()

function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

// let doesn't create variables on the global object
// may only be on browser...
/*
var x = 'global';
let y = 'global';
console.log(this.x); // "global"
console.log(this.y); // undefined
*/

// Arrow functions
// short function notation that doesn't have this, arguments, super, new.target ref.

let colors = ['red', 'green', 'blue', 'yellow']

colors.forEach(color => console.log(color))

colors = colors.filter(color => color !== 'red')
// colors = colors.filter((color) => {
//     return color !== 'red'
// })
console.log(colors)

//Mats example
function Person() {
    this.age = 0
    var that = this

    setInterval(function growUp() {
        this.age++ // referencen vil være window da den ikke vil gå binde sig på det globale objekt.
        that.age++ // Vi kan fikse dette ved at deklarerer this i en variable og refererer til denne istedet.
        console.log(this.age)
        console.log(that.age)
    }, 1000)

    // Kan også løses med en arrow function
    setInterval(() => {
        this.age++
    }, 1000)

}
// var p = new Person()

// this
// Unlike functions, arrows share the same lexical this as their surrounding code.
// If an arrow is inside another function, it shares the “arguments” variable of its parent function.

// rest parameters
function f3(x, ...y) {
    // y is an Array
    console.log(y)
    return x * y.length;
}
console.log(f3(3, "hello", true) == 6) // true

// destructuring assignments
let [a, ,b] = [1,2,3]
console.log(a === 1) // true
console.log(b === 3) // true

let {foo, bar} = {foo: 'John', bar: 'Doe'}
console.log(foo) // John
console.log(bar) // Doe

// maps & sets
let s = new Set()
s.add('hello').add('goodbye').add('hello')
console.log(s.size === 2)
console.log(s.has('hello')) // true

let m = new Map()
m.set('hello', 42)
m.set(s, 34)
console.log(m.get(s) == 34) // true

//extra...
// default
function f1(x, y=12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
}
console.log(f1(3) == 15) // true

// spread
function f2(x, y, z) {
    return x + y + z;
}
// Pass each elem of array as argument
console.log(f2(...[1,2,3]) == 6) // true
