"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "";
    }
}
class Dog extends Animal {
    sound() {
        return this.bark();
    }
    bark() {
        return "Woof!";
    }
}
class Cat extends Animal {
    sound() {
        return this.meow();
    }
    meow() {
        return "Meow!";
    }
}
const dog = new Dog("Buddy");
console.log(dog.name); // Buddy
console.log(dog.sound()); // Woof!
console.log(dog.bark()); // Woof!
const cat = new Cat("Kitty");
console.log(cat.name); // Kitty
console.log(cat.sound()); // Meow!
console.log(cat.meow());
