import { isValidDate } from '../utils/functions.js';

export class Book {
  constructor(id, title, category, copies, minCopies, expiresAt) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.copies = copies;
    this.minCopies = minCopies;
    this.expiresAt = expiresAt;
  }
  static validateBook(book) {
    const invalidFields = [];
    let isValid = true;
    const test = isValidDate(book.expiresAt);
    if (!book.id || typeof book.id !== 'string') {
      invalidFields.push('id');
      isValid = false;
    }
    if (!book.title || typeof book.title !== 'string') {
      invalidFields.push('title');
      isValid = false;
    }
    if (!book.category || typeof book.category !== 'string') {
      invalidFields.push('category');
      isValid = false;
    }
    if (book.copies === undefined || isNaN(book.copies) || book.copies < 0) {
      invalidFields.push('copies');
      isValid = false;
    }
    if (
      book.minCopies === undefined ||
      isNaN(book.minCopies) ||
      book.minCopies < 0
    ) {
      invalidFields.push('minCopies');
      isValid = false;
    }
    if (!book.expiresAt || (!test && typeof book.expiresAt !== null)) {
      invalidFields.push('expiresAt');
      isValid = false;
    }

    return { isValid: isValid, invalidFields: invalidFields };
  }
}
