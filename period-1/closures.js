/**
 * Created by ChristopherBorum on 08/01/2017.
 */

// Closures

var outer = 3

var add = function () {
    var inner = 2
    return outer + inner
}

console.log(add())

// Function Closures

var outerAdd = function (param1) {
    var innerAdd = function (param2) {
        return param1 + param2
    }
    return innerAdd
}

var addThree = new outerAdd(3)
console.log(addThree(1))

// closure -> it preserves the variables in the function as a property (closure)
// functions with preserved data...