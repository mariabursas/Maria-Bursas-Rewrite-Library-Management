class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  displayInfo() {
    if (!this.hasOwnProperty("genre")) {
      console.log(
        `The name of the book is ${this.title} by the author ${this.author} with the ISBN: ${this.isbn}`
      );
    } else {
      console.log(
        `The name of the book is ${this.title} by the author ${this.author} with the ISBN: ${this.isbn} and the gendre is ${this.genre}`
      );
    }
  }
}

class FictionBook extends Book {
  constructor(title, author, isbn, genre) {
    super(title, author, isbn);
    this.genre = genre;
  }
}

class Library {
  constructor() {
    this.bookList = [];
  }

  addBook(book) {
    this.bookList.push(book);
  }
}

class LibraryMember {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = [];
  }

  borrow(library, book) {
    const index = library.bookList.indexOf(book);
    if (index !== -1) {
      library.bookList.splice(index, 1);
      this.borrowedBooks.push(book);
      console.log(`${this.name} borrowed ${book.title}`);
    } else {
      console.log(`${book.title} cannot be borrowed.`);
    }
  }

  displayMemberInfo() {
    console.log(`Books borrowed by ${this.name}: `);
    if (this.borrowedBooks.length === 0) {
      console.log("None");
    } else {
      this.borrowedBooks.forEach((book) => {
        console.log(`${book.title} by ${book.author}`);
      });
    }
  }
}

const newLibrary = new Library();
const popescuIon = new LibraryMember("Popescu Ion");
const padureaSpanzuratilorBook = new Book("Padurea Spanzuratilor", "Liviu Rebreanu", "1234");
const fratiiKaramazovBook = new FictionBook("Fratii Karamazov", "Fyodor Dostoevsky", "9999", "Fiction");
const crimaSiPedeapsa = new FictionBook("Crima si pedeapsa", "Fyodor Dostoevsky", "4444", "Fiction");

newLibrary.addBook(padureaSpanzuratilorBook);
newLibrary.addBook(fratiiKaramazovBook);
newLibrary.addBook(crimaSiPedeapsa);

popescuIon.borrow(newLibrary, padureaSpanzuratilorBook);
popescuIon.borrow(newLibrary, fratiiKaramazovBook);

popescuIon.displayMemberInfo();
padureaSpanzuratilorBook.displayInfo();
fratiiKaramazovBook.displayInfo();

const georgescuMaria = new LibraryMember("Georgescu Maria");
georgescuMaria.borrow(newLibrary, crimaSiPedeapsa);