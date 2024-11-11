import { useContext, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './showSubjects.css';
import { AuthContext } from '../../context/auth';
import { db } from '../../config/firebaseConnection';
import { collection, doc, getDoc } from 'firebase/firestore';
import noBackground from '../../assets/images/disciplinas/noBackground.png';

export default function ShowSubjects() {
  const { user } = useContext(AuthContext);
  const userSubjects = user.subjects; // Array de IDs de matérias
  const [materias, setMaterias] = useState([]);

  const fetchMateria = useCallback(async (subjectId) => {
    const collectionRef = collection(db, user.curso);
    const docRef = doc(collectionRef, subjectId);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }, [user.curso]);

  useEffect(() => {
    const fetchAllMaterias = async () => {
      const materiasCarregadas = [];
      for (const subjectId of userSubjects) {
        const materia = await fetchMateria(subjectId);
        materiasCarregadas.push({ ...materia, subjectId });
      }
      setMaterias(materiasCarregadas);
    };
    fetchAllMaterias();
  }, [userSubjects, fetchMateria]);

  return (
    <div className="showSubjects">
      {materias.length > 0 ? (
        materias.map((materia, index) => (
          <div 
            key={index} 
            className='capa'
            style={{ backgroundImage: `url(${materia.img || noBackground})` }}
          >
            <div className="subject">
              <div className="subject-content">
                <h2>{materia.nome}</h2>
                <Link to={`/DisciplinaInfo/${encodeURIComponent(materia.subjectId)}`} className="link"> 
                  <button className="acessar-disciplina">Acessar Disciplina</button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : ( <p>Carregando matérias...</p> )}
    </div>
  );
}
