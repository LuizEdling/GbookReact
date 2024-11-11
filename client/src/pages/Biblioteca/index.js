import React, { useState, useEffect } from 'react'; // Add useState import
import '../Biblioteca/Biblioteca.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Biblioteca() {
  // Define the BooksList component inside Biblioteca
  const BooksList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/books');
          const data = await response.json();
          setBooks(data);
        } catch (error) {
          console.error('Erro ao carregar os livros:', error);
        }
      };

      fetchBooks();
    }, []); // Empty dependency array to run only once on mount

    return (
      <div>
        <h2>Livros Disponíveis</h2>
        <ul>
          {books.map((book) => (
            <li key={book._id}>{book.nome}</li> // Assuming each book has a unique _id and a 'name' field
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <BooksList /> 
      <Footer />
    </div>
  );
}
