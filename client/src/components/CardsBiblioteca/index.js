import React from 'react';
import { Link } from 'react-router-dom'; // importa o {Link}

import '../CardsBiblioteca/CardsBiblioteca.css'; // importa o CSS

// define o componente CardsBiblioteca que recebe as props sectionId e o sectionData
const CardsBiblioteca = ({ sectionId, sectionData }) => {
  const section = sectionData[sectionId];
  
  // Se a seção não existir, retorna null e não renderiza nada
  if (!section) {
    return null;
  }

  return (
    <section id={sectionId} 
    
    className="custom-section">
      <div className="container my-5">

        {/* Ppega o title do array da Biblioteca */}
        <h2 className="mb-4">{section.title}</h2>

        <div className="scrolling-wrapper">

          {/* puxa os cards do array da pagina de Biblioteca e o index */}
          {section.cards.map((card, index) => (

            //para cada card cria uma página "especifica" para o curso
            <Link key={index} to={`/curso/${encodeURIComponent(card.title)}`} className="card-link">

              {/* puxa o caminho da imagem */}
              <div className="card">
                <img src={card.imgSrc} className="card-img-top" alt={card.imgAlt} />
                <h5 className="card-title">{card.title}</h5>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsBiblioteca;
