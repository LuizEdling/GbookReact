import React, { useEffect, useState } from "react";
import './BookInfo.css';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import noImgBook from '../../assets/images/capa-branca.jpg';

export default function BookInfo() {
  const { bookId } = useParams();
  const [livro, setLivro] = useState(null);
  const [error, setError] = useState(null);


  const handleAddToReadLater = () => {
    fetch(`http://localhost:8000/api/saved-books/${bookId}`, {
      method: 'POST',
      credentials: 'include', // Inclui os cookies na requisição
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao adicionar o livro à lista Ler Mais Tarde');
        }
        return response.json();
      })
      .then(data => {
        toast.success('Livro salvo!')
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    // Busca todos os livros da API
    fetch('http://localhost:8000/api/books')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar livros: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // Filtra o livro pelo bookId
        const livroEncontrado = data.find(book => book._id === bookId);
        if (livroEncontrado) {
          setLivro(livroEncontrado);
        } else {
          setError('Livro não encontrado');
        }
      })
      .catch(error => setError(error.message));
  }, [bookId]);

  if (error) {
    return <div className="error-message">Erro: {error}</div>;
  }

  if (!livro) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="livro">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 book-cover">
            <img
              src={livro.imgUrl || noImgBook} 
              alt={`Capa do livro ${livro.nome}`}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 book-info">
            <div className="title-and-back">
              <h2>{livro.nome}</h2>
            </div>
            <h3>{livro.autor}</h3>
            <p>{livro.desc}</p>
            <div className="button-container">
              <a href={livro.pdfUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-color btn-left">Acessar Livro</a>
              <button onClick={handleAddToReadLater} className="btn btn-primary btn-color btn-right">Ler mais tarde</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
