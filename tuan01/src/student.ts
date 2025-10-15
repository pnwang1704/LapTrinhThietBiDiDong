import { Person}from './person';

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  displayAllInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

// Example usage:
 const student = new Student("Quang", 21, "DHKTPM");
 student.displayAllInfo();