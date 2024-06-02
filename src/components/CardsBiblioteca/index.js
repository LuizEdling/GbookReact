import React from 'react';
import '../../assets/CardsBiblioteca.css';

const CardsBiblioteca = ({ sectionId, sectionData }) => {
  const section = sectionData[sectionId];

  if (!section) {
    return null;
  }

  return (
    <section id={sectionId} className="custom-section">
      <div className="container my-5">
        <h2 className="mb-4">{section.title}</h2>
        <div className="scrolling-wrapper">
          {section.cards.map((card, index) => (
            <a key={index} href={card.link}>
              <div className="card">
                <img src={card.imgSrc} className="card-img-top" alt={card.imgAlt} />
                <h5 className="card-title">{card.title}</h5>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsBiblioteca;
