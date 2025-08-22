class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): string {
    return "";
  }
}

class Dog extends Animal {
  sound(): string {
    return this.bark();
  }

  bark(): string {
    return "Woof!";
  }
}

class Cat extends Animal {
  sound(): string {
    return this.meow();
  }

  meow(): string {
    return "Meow!";
  }
}

const dog = new Dog("Buddy");
console.log(dog.name);        // Buddy
console.log(dog.sound());     // Woof!
console.log(dog.bark());      // Woof!

const cat = new Cat("Kitty");
console.log(cat.name);        // Kitty
console.log(cat.sound());     // Meow!
console.log(cat.meow());  