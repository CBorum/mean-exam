/**
 * Created by ChristopherBorum on 11/01/2017.
 */

// Based on Mats example
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    speak() {
        console.log(`${this.name} laver en lyd`)
    }

    info() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

class Cat extends Animal {
    // inherits the contructor and methods from Animal
    speak() { // override
        console.log(`${this.name} miaver`)
    }
}

let an1 = new Animal('BB', 10)
let an2 = new Cat('CC', 20)

an1.speak() // BB laver en lyd
an1.info() // Name: BB, Age: 10
an2.speak() // CC miaver
an2.info() // Name: CC, Age: 20