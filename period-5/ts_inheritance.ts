/**
 * Created by ChristopherBorum on 11/01/2017.
 */
abstract class Animal {
    static animalCount: number = 0;
    protected legs: number = 0;
    constructor(private name: string) {
        Animal.animalCount++;
    }
    move(met) {
        console.log(`${this.name} moved ${met} m with ${this.legs}`);
    }
}
class Snake extends Animal {
    move() { super.move(5);}
}
class Horse extends Animal {
    constructor(name: string, legs: number) {
        super(name);
        this.legs = legs;
    }
    move() { super.move(45); }
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("King", 4);
sam.move();
tom.move(34);
console.log(Animal.animalCount); //2