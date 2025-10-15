class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  work(): void {
    console.log(`${this.name} đang làm việc.`);
  }
}

class Manager extends Employee {
  manageTeam(): void {
    console.log(`${this.name} thuộc team quản lý.`);
  }
}

class Developer extends Employee {
  writeCode(): void {
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