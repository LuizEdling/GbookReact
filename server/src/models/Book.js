// Importação da biblioteca mongoose
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: false
  },
  pdfUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Book', bookSchema);