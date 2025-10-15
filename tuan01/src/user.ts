export class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
}

// Example usage:
const user = new User("Quang");
console.log(user.name); // Quang
user.name = "Nhat Quang";
console.log(user.name); // Nhat Quang