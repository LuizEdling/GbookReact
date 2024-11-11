const Book = require('../models/Book.js');

async function getBooks(req, res){
  const books = await Book.find();
  return res.status(200).json(books);
}

async function createBook(req, res){
  const book = req.body;
  const newBook = await Book.create(book);

  return res.status(201).json(newBook);
}

async function deleteBook(req, res) {
  const id = req.params.id;
  await Book.findByIdAndDelete({ _id: id });
  return res.status(200).json({ response: "Livro deletado! "});
}

module.exports = { getBooks, createBook, deleteBook };