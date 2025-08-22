export class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public area(): number {
        return this.width * this.height;
    }

    public perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(5, 10);
console.log(`Area: ${rectangle.area()}`); // Area: 50
console.log(`Perimeter: ${rectangle.perimeter()}`); // Perimeter: 30