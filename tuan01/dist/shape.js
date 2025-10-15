"use strict";
class Shape {
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
// Example usage:
const square = new Square(4);
console.log(square.area()); // 16
const circle = new Circle(3);
console.log(circle.area()); // 28.274333882308138
