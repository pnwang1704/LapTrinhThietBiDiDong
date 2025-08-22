"use strict";
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
// Example usage:
const numberBox = new Box(123);
console.log(numberBox.getValue());
const stringBox = new Box("Hello");
console.log(stringBox.getValue());
