import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './HomeListaAutores.css';
import fotoAutor from '../../assets/images/perfil-semfoto.jpg';

export default function HomeList(props){
  const autores = [
    { id: 1, titulo: 'Livro 1', capa: fotoAutor, alt:'Foto do autor 1'},
    { id: 2, titulo: 'Livro 2', capa: fotoAutor, alt:'Foto do autor 2'},
    { id: 3, titulo: 'Livro 3', capa: fotoAutor, alt:'Foto do autor 3'},
    { id: 4, titulo: 'Livro 4', capa: fotoAutor, alt:'Foto do autor 4'},
    { id: 5, titulo: 'Livro 5', capa: fotoAutor, alt:'Foto do autor 5'},
    { id: 6, titulo: 'Livro 6', capa: fotoAutor, alt:'Foto do autor 6'},
    { id: 7, titulo: 'Livro 7', capa: fotoAutor, alt:'Foto do autor 7'},
    { id: 8, titulo: 'Livro 8', capa: fotoAutor, alt:'Foto do autor 8'},
    { id: 9, titulo: 'Livro 9', capa: fotoAutor, alt:'Foto do autor 9'},
    { id: 10, titulo: 'Livro 10', capa: fotoAutor, alt:'Foto do autor 10'},
    { id: 11, titulo: 'Livro 11', capa: fotoAutor, alt:'Foto do autor 11'},
    { id: 12, titulo: 'Livro 12', capa: fotoAutor, alt:'Foto do autor 12'},
    { id: 13, titulo: 'Livro 13', capa: fotoAutor, alt:'Foto do autor 13'},
    { id: 14, titulo: 'Livro 14', capa: fotoAutor, alt:'Foto do autor 14'},
    { id: 15, titulo: 'Livro 15', capa: fotoAutor, alt:'Foto do autor 15'},
  ];

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return(
    <div className='AutorsList-container'>
      <h3>{props.tituloSecao}</h3>
      <div className="Authors">
        <Slider {...settings}>
          {autores.map((r) => (
            <div>
                <img src={r.capa} alt={r.alt}></img>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}