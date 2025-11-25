// LibrarySystem.js
// Book class with issue and return operations; ISBN search for issuing

class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      console.log(`${this.title} (ISBN:${this.ISBN}) is already issued.`);
      return false;
    }
    this.isIssued = true;
    console.log(`${this.title} has been issued.`);
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      console.log(`${this.title} is not issued.`);
      return false;
    }
    this.isIssued = false;
    console.log(`${this.title} has been returned.`);
    return true;
  }

  details() {
    return `${this.title} by ${this.author} | ISBN: ${this.ISBN} | Issued: ${this.isIssued}`;
  }
}

// sample books
const library = [
  new Book('The Alchemist', 'Paulo Coelho', 'ISBN001'),
  new Book('Clean Code', 'Robert C. Martin', 'ISBN002'),
  new Book('Introduction to Algorithms', 'CLRS', 'ISBN003'),
  new Book('You Don’t Know JS', 'Kyle Simpson', 'ISBN004', true)
];

// display available books
function showAvailable() {
  console.log('Available books:');
  library.filter(b => !b.isIssued).forEach(b => console.log(b.details()));
}

// issue book by ISBN
function issueByISBN(isbn) {
  const book = library.find(b => b.ISBN === isbn);
  if (!book) {
    console.log('Book not found for ISBN:', isbn);
    return;
  }
  book.issueBook();
}

// return by ISBN
function returnByISBN(isbn) {
  const book = library.find(b => b.ISBN === isbn);
  if (!book) {
    console.log('Book not found for ISBN:', isbn);
    return;
  }
  book.returnBook();
}

// Example usage:
showAvailable();
issueByISBN('ISBN002');   // issues Clean Code
showAvailable();
issueByISBN('ISBN004');   // already issued
returnByISBN('ISBN004');  // returns
