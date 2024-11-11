const express = require('express');
const routes = express.Router();

const { getBooks, createBook, deleteBook } = require('../controllers/BookController');

routes.get('/books', getBooks);
routes.post('/books', createBook);
routes.delete('/books/:id', deleteBook);

module.exports = routes;