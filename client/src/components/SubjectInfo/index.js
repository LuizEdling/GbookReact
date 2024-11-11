import React, { useContext, useState, useEffect } from 'react';
import './SubjectInfo.css';
import { AuthContext } from '../../context/auth';
import { useParams } from 'react-router-dom';
import { db } from '../../config/firebaseConnection';
import { doc, getDoc } from 'firebase/firestore';

export default function SubjectInfo() {
  const { subjectId } = useParams();
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [subjectName, setSubjectName] = useState(''); // Estado para armazenar o nome da disciplina

  useEffect(() => {
    // Função para buscar o nome da disciplina do Firestore
    const fetchSubjectName = async () => {
      try {
        const subjectDocRef = doc(db, user.curso, subjectId); // Coleção do curso e ID da matéria
        const subjectDoc = await getDoc(subjectDocRef);
        if (subjectDoc.exists()) {
          setSubjectName(subjectDoc.data().nome); // Define o nome da disciplina
        } else {
          setError('Disciplina não encontrada');
        }
      } catch (err) {
        setError('Erro ao buscar dados da disciplina: ' + err.message);
      }
    };

    fetchSubjectName();

    // Busca pelos livros da disciplina
    fetch(`http://localhost:8000/api/books?subject=${subjectId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar livros: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => setBooks(data.filter(book => book.subject === subjectId)))
      .catch(error => setError(error.message));
  }, [subjectId, user.curso]); // Incluído 'user.curso' como dependência

  return (
    <div className='subjectInfo'>
      <div className='title'>
        <h1>{subjectName ? `${subjectName}` : 'Carregando disciplina...'}</h1>
      </div>
      <div className='subjectBooks'>
        {error ? (
          <p>{error}</p>
        ) : books.length === 0 ? (
          <p>Nenhum livro encontrado!</p>
        ) : (
          <ul>
            {books.map(book => (
              <li key={book._id}>
                <h2>{book.nome}</h2>
                <img src={book.imgUrl} alt={book.nome} />
                <p>{book.desc}</p>    
                <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer">Ler PDF</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}