"use strict";
class MathUtil {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0)
            throw new Error("Cannot divide by zero");
        return a / b;
    }
}
// Example usage:
console.log(MathUtil.add(2, 3)); // 5
console.log(MathUtil.subtract(5, 2)); // 3
console.log(MathUtil.multiply(4, 6)); // 24
console.log(MathUtil.divide(10, 2)); // 5
