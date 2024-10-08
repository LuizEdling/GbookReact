import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './HomeListaLivros.css';
import capaBranca from '../../assets/images/capa-branca.jpg';

export default function HomeList(props) {
  const livros = [
    { id: 1, titulo: 'Livro 1', capa: capaBranca, alt: 'Capa do livro 1' },
    { id: 2, titulo: 'Livro 2', capa: capaBranca, alt: 'Capa do livro 2' },
    { id: 3, titulo: 'Livro 3', capa: capaBranca, alt: 'Capa do livro 3' },
    { id: 4, titulo: 'Livro 4', capa: capaBranca, alt: 'Capa do livro 4' },
    { id: 5, titulo: 'Livro 5', capa: capaBranca, alt: 'Capa do livro 5' },
    { id: 6, titulo: 'Livro 6', capa: capaBranca, alt: 'Capa do livro 6' },
    { id: 7, titulo: 'Livro 7', capa: capaBranca, alt: 'Capa do livro 7' },
    { id: 8, titulo: 'Livro 8', capa: capaBranca, alt: 'Capa do livro 8' },
    { id: 9, titulo: 'Livro 9', capa: capaBranca, alt: 'Capa do livro 9' },
    { id: 10, titulo: 'Livro 10', capa: capaBranca, alt: 'Capa do livro 10' },
    { id: 11, titulo: 'Livro 11', capa: capaBranca, alt: 'Capa do livro 11' },
    { id: 12, titulo: 'Livro 12', capa: capaBranca, alt: 'Capa do livro 12' },
    { id: 13, titulo: 'Livro 13', capa: capaBranca, alt: 'Capa do livro 13' },
    { id: 14, titulo: 'Livro 14', capa: capaBranca, alt: 'Capa do livro 14' },
    { id: 15, titulo: 'Livro 15', capa: capaBranca, alt: 'Capa do livro 15' },
  ];

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 5
        }
      }
    ]
  };

  return (
    <div className='BookList-container'>
      <h3>{props.tituloSecao}</h3>
      <div>
        <Slider {...settings}>
          {livros.map((r) => (
            <div key={r.id} className="book-card">
              <img src={r.capa} alt={r.alt} />
              <div className="overlay">
                <h4>{r.titulo}</h4>
                <button className="details-button">Ver detalhes</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}