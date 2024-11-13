import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import './SavedBooks.css';
import noImgBook from '../../assets/images/capa-branca.jpg';

export default function SavedBooks() {
  const [savedBooks, setSavedBooks] = useState([]);
  const [error, setError] = useState(null);

  const handleDeleteBook = (bookId) => {
    fetch(`http://localhost:8000/api/saved-books/${bookId}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao excluir o livro: ' + response.statusText);
        }
        setSavedBooks(prevBooks => prevBooks.filter(book => book._id !== bookId));

        toast.success('Livro excluído com sucesso!');
      })
      .catch(error => {
        setError(error.message);
        toast.error('Erro ao excluir o livro!');
      });
  };

  useEffect(() => {
    fetch('http://localhost:8000/api/saved-books', {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar os IDs dos livros salvos: ' + response.statusText);
        }
        return response.json();
      })
      .then(savedBookIds => {
        fetch('http://localhost:8000/api/books')
          .then(response => {
            if (!response.ok) {
              throw new Error('Erro ao buscar todos os livros: ' + response.statusText);
            }
            return response.json();
          })
          .then(allBooks => {
            const filteredBooks = allBooks.filter(book => savedBookIds.includes(book._id));
            setSavedBooks(filteredBooks);
          })
          .catch(error => setError(error.message));
      })
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div className="error-message">Erro: {error}</div>;
  }

  if (!savedBooks.length) {
    return <div className="SavedBooks-container">Nenhum livro salvo encontrado.</div>;
  }

  return (
    <div className="SavedBooks-container">
      <h2 className="SavedBooks-title">Livros para Ler Mais Tarde</h2>
      {savedBooks.map((book) => (
        <div key={book._id} className="SavedBooks-item">
          <img src={book.imgUrl || noImgBook} alt={`Capa do livro ${book.nome}`} className="SavedBooks-image" />
          <div className="SavedBooks-details">
            <h3 className="SavedBooks-name">{book.nome}</h3>
            <p className="SavedBooks-author">{book.autor}</p>
            <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer" className="SavedBooks-link">
              Acessar Livro
            </a>
          </div>
          <button className="delete-book" onClick={() => handleDeleteBook(book._id)}>
            Excluir livro
          </button>
        </div>
      ))}
    </div>
  );
}
