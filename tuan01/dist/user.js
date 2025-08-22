"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
exports.User = User;
// Example usage:
const user = new User("Quang");
console.log(user.name); // Quang
user.name = "Nhat Quang";
console.log(user.name); // Nhat Quang
