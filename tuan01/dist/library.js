"use strict";
class Books {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    toString() {
        return `Book { title: '${this.title}', author: '${this.author}' }`;
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return `User { name: '${this.name}' }`;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    addUser(user) {
        this.users.push(user);
    }
    getBooks() {
        return this.books;
    }
    getUsers() {
        return this.users;
    }
}
// Example usage:
const library = new Library();
library.addBook(new Books("2025", "React Native"));
library.addUser(new User("Quang"));
console.log(library.getBooks().map(book => book.toString()));
console.log(library.getUsers().map(user => user.toString()));
