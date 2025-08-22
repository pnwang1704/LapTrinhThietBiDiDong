"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log(`${this.name} đang làm việc.`);
    }
}
class Manager extends Employee {
    manageTeam() {
        console.log(`${this.name} thuộc team quản lý.`);
    }
}
class Developer extends Employee {
    writeCode() {
        console.log(`${this.name} thuộc team code.`);
    }
}
// Example usage:
const manager = new Manager("Quang");
manager.work();
manager.manageTeam();
const developer = new Developer("Huy");
developer.work();
developer.writeCode();
