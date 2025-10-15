"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
exports.Rectangle = Rectangle;
const rectangle = new Rectangle(5, 10);
console.log(`Area: ${rectangle.area()}`); // Area: 50
console.log(`Perimeter: ${rectangle.perimeter()}`); // Perimeter: 30
