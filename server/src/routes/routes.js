// Configurações iniciais
const express = require('express');
const routes = express.Router();

// Importações de controllers
const { getBooks, createBook, deleteBook, searchBooks } = require('../controllers/BookController');
const readLaterController = require('../controllers/SavedBooksController');

// Ligações entre rotas e controladores para livros
routes.get('/books', getBooks);
routes.post('/books', createBook);
routes.delete('/books/:id', deleteBook);

// Rota para buscar livros por nome
routes.get('/search/:searchId', searchBooks);

// Ligações entre rotas e controladores para cookies (salvar livros)
routes.get('/saved-books', readLaterController.getReadLaterBooks);
routes.post('/saved-books/:bookId', readLaterController.addBookToReadLater);
routes.delete('/saved-books/:bookId', readLaterController.deleteReadLaterBook);

module.exports = routes;