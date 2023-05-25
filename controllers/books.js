const { createBook } = require("../services/books/create");
const { findBooks } = require("../services/books/find");
const { updateBook } = require("../services/books/update");

async function _createBook(book) {
  return await createBook(book);
}

async function _findBooks() {
  return await findBooks();
}

async function _updateBook(id, fieldsToUpdate) {
  return await updateBook(id, fieldsToUpdate); // Pasa fieldsToUpdate a la función updateBook
}

module.exports = {
  _createBook,
  _findBooks,
  _updateBook,
};
