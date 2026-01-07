import { Book } from './book.js';

export class LibraryManagement {
  static addBook(library, book) {
    const isIdExist = library.find((b) => b.id == book.id);
    if (isIdExist != undefined) {
      throw new Error(`book with id ${book.id} already exist`);
    }
    const info = Book.validateBook(book);
    if (!info.isValid) {
      throw new Error({
        message: 'Book is invalid',
        info: info,
      });
    }
    library.push(book);
  }

  static removeBook(library, bookId) {
    const bookIndex = library.findIndex((b) => b.id == bookId);
    if (bookIndex === -1) {
      throw new Error(`book with id ${bookId} doesn't exist`);
    }
    library.splice(bookIndex, 1);
  }

  static updateCopies(library, bookId, delta) {
    if (delta !== 0) {
      const bookIndex = library.findIndex((b) => b.id == bookId);
      if (bookIndex === -1) {
        throw new Error(`book with id ${bookId} doesn't exist`);
      }
      if (library[bookIndex].copies + delta < 0) {
        throw new Error(
          `book with id ${bookId} doesn't have this amount of copy to borrow`
        );
      }
      library[bookIndex].copies += delta;
    }
  }

  static getLowCopyBooks(library) {
    const lowCopy = library.filter(
      (b) => b.copies < b.minCopies && b.minCopies > 0
    );
    const sortLow = lowCopy.sort(
      (a, b) => a.copies / a.minCopies - b.copies / b.minCopies
    );
    return sortLow;
  }
}
