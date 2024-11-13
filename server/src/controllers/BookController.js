// Requerimento do modelo de livro
const Book = require('../models/Book.js');

// Função para ler os dados da API de livros
async function getBooks(req, res){
  const books = await Book.find();
  return res.status(200).json(books);
}

// Função para ler um livro específico
async function searchBooks(req, res) {
  const { searchId } = req.params;
  const books = await Book.find({ nome: new RegExp(searchId, 'i') });
  return res.status(200).json(books);
}

// Função para criar novo livro
async function createBook(req, res){
  const book = req.body;
  const newBook = await Book.create(book);

  return res.status(201).json(newBook);
}

// Função para deletar um livro
async function deleteBook(req, res) {
  const id = req.params.id;
  await Book.findByIdAndDelete({ _id: id });
  return res.status(200).json({ response: "Livro deletado! "});
}

module.exports = { getBooks, searchBooks, createBook, deleteBook };