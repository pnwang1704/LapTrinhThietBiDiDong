abstract class Shape {
  abstract area(): number;
}

class Square extends Shape {
  side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Example usage:
const square = new Square(4);
console.log(square.area()); // 16

const circle = new Circle(3);
console.log(circle.area()); // 28.274333882308138