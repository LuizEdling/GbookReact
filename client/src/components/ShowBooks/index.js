import React, { useEffect, useState, useContext } from "react";
import './ShowBooks.css';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/auth';
import noImgBook from '../../assets/images/capa-branca.jpg';

export default function ShowBooks() {
  const { user } = useContext(AuthContext);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    let url = 'http://localhost:8000/api/books';
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        console.log(json);  // Verifique os dados retornados pela API
        setBookList(json);  // Armazena os dados no estado
      })
      .catch((err) => console.error('Erro ao buscar os livros:', err));  // Trate erros de requisição
  }, []);

  return (
    <div className="ShowBooks">
      <div className="top">
        <h1>Todos os livros</h1>
        {user.user_type === "professor" && (
          <Link to="/AddLivro">
            <button><b>Adicionar livro</b></button>
          </Link>
        )}
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
