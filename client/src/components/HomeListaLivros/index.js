import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './HomeListaLivros.css';
import capaBranca from '../../assets/images/capa-branca.jpg';

export default function HomeListaLivros({ tituloSecao, livros }) {
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
      <h3>{tituloSecao}</h3>
      <div>
        <Slider {...settings}>
          {livros.map((r) => (
            <div key={r._id} className="book-card">
              <img src={r.imgUrl || capaBranca} alt={r.nome} />
              <div className="overlay">
                <button className="details-button">Ver detalhes</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
