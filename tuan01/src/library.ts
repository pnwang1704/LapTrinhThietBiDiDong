class Books {
  constructor(public title: string, public author: string) {}

  toString(): string {
    return `Book { title: '${this.title}', author: '${this.author}' }`;
  }
}

class User {
  constructor(public name: string) {}

  toString(): string {
    return `User { name: '${this.name}' }`;
  }
}

class Library {
  private books: Books[] = [];
  private users: User[] = [];

  addBook(book: Books): void {
    this.books.push(book);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  getBooks(): Books[] {
    return this.books;
  }

  getUsers(): User[] {
    return this.users;
  }
}

// Example usage:
const library = new Library();
library.addBook(new Books("2025", "React Native"));
library.addUser(new User("Quang"));

console.log(library.getBooks().map(book => book.toString()));
console.log(library.getUsers().map(user => user.toString())); 