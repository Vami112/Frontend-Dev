class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getAvailableBooks() {
    return this.books.filter(b => b.available === true);
  }

  searchByAuthor(author) {
    return this.books.find(b => b.author === author);
  }
}

const lib = new Library();
lib.addBook({ title: "Atomic Habits", author: "James Clear", available: true });
lib.addBook({ title: "The Alchemist", author: "Paulo Coelho", available: false });
lib.addBook({ title: "Ikigai", author: "Héctor García", available: true });

console.log("Available Books:", lib.getAvailableBooks());
console.log("Author Search:", lib.searchByAuthor("James Clear"));
