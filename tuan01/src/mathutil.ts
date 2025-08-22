class MathUtil {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static divide(a: number, b: number): number {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  }
}

// Example usage:
console.log(MathUtil.add(2, 3));        // 5
console.log(MathUtil.subtract(5, 2));   // 3
console.log(MathUtil.multiply(4, 6));   // 24
console.log(MathUtil.divide(10, 2));    // 5