
// Practical Task-5 //
// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal //
class Animal {
    constructor (name, move) {
        this.name = name;
        this.move = move;
    }
 sayHello() {
    console.log(`${this.name} say you meow and ${this.move} to the room`);
 }
}
class Cat extends Animal {
    constructor(name,move) {
        super(name,move);
    }
sayHi() {
    console.log (`${this.name} meow`)
}
}
const Bas = new Cat ("Basik","move");
Bas.sayHello();
