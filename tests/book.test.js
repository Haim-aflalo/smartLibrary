import { Book } from '../classes/book.js';
import test, { describe } from 'node:test';
import assert from 'node:assert/strict';

const book1 = new Book('1', 'hp', 'FICTION', 69, 0, '2026-01-01');
const book2 = new Book('2', 'hp 2', 'FICTIONL', 0, 0, '2026-01-01');

describe('validateBook', () => {
  test('verification on book instance', () => {
    assert.deepEqual(Book.validateBook(book1), {
      isValid: true,
      invalidFields: [],
    });
    assert.deepEqual(Book.validateBook(book2), {
      isValid: true,
      invalidFields: [],
    });
  });
});
