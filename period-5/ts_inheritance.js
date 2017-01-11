var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by ChristopherBorum on 11/01/2017.
 */
var Animal = (function () {
    function Animal(name) {
        this.name = name;
        this.legs = 0;
        Animal.animalCount++;
    }
    Animal.prototype.move = function (met) {
        console.log(this.name + " moved " + met + " m with " + this.legs);
    };
    Animal.animalCount = 0;
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        _super.apply(this, arguments);
    }
    Snake.prototype.move = function () { _super.prototype.move.call(this, 5); };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name, legs) {
        _super.call(this, name);
        this.legs = legs;
    }
    Horse.prototype.move = function () { _super.prototype.move.call(this, 45); };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("King", 4);
sam.move();
tom.move(34);
console.log(Animal.animalCount); //2
