//! Write a constructor for making “Book” objects. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.
//! Put a function into the constructor that can report the book info like so:
//! theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

function Book(title, author, noOfPages, read) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.read = read.toLowerCase()=="read" ? "already read" : "not read yet";

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.noOfPages} pages, ${this.read}`;
  };
}

let myBook = new Book("The Hobbit", "Yash Tiwari", "298", "read");
console.log(myBook.info());
