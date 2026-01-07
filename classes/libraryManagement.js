import { Book } from './book.js'

class LibraryManagement {
    static addBook(library, book) {
        const isIdExist = library.find(b => b.id == book.id);
        if (isIdExist != undefined) {
            throw new Error(`book with id ${book.id} already exist`);
        }

        const info = Book.validateBook(book);
        if (!info.isValid) {
            throw new Error({
                message: "Book is invalid",
                info: info
            });
        }

        library.push(book)
    }
}