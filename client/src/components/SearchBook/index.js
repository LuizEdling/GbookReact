import React, { useState, useEffect } from "react";
import './SearchBook.css';
import { useParams, Link } from "react-router-dom";
import noImgBook from '../../assets/images/capa-branca.jpg';

export default function SearchBook() {
  const { searchId } = useParams();
  const [bookList, setBookList] = useState([]);
  
  useEffect(() => {
    const fetchBooks = () => {
      const url = `http://localhost:8000/api/search/${searchId}`;
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setBookList(json);
        })
        .catch((err) => console.error('Erro ao buscar os livros:', err));
    };

    fetchBooks();
  }, [searchId]); // Adiciona searchId como dependência

  return (
    <div className="ShowBooks">
      <div className="top">
        <h1>Resultado para "{searchId}"</h1>
      </div>
      <div className="books-container">
        {bookList.map((book) => (
          <div key={book._id} className="book-item">
            <Link to={`/Livro/${book._id}`}>
              <img src={book.imgUrl || noImgBook} alt={book.nome} />
              <p><b>{book.nome}</b></p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
