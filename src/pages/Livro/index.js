import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/Livro.css';
import capaBranca from '../../assets/images/capa-branca.jpg';

const Livro = () => {
  const livroInfo = {
    capa: capaBranca,
    nome: "Nome do Livro",
    autor: "Autor",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem odit repellat. Officiis, at incidunt? At dolorem consectetur fugit perspiciatis aliquam, laborum molestiae excepturi earum nesciunt esse amet vitae maiores."
  };

  return (
    <>
        <Header/>
        <div className="divider"></div>

        <section id="livro">
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-6 book-cover">
                <img src={livroInfo.capa} alt="Capa do Livro" className="img-fluid" />
            </div>
            <div className="col-md-6 book-info">
                <div className="title-and-back">
                <h2>{livroInfo.nome}</h2>
                </div>
                <h3>{livroInfo.autor}</h3>
                <p>{livroInfo.descricao}</p>
                <div style={{ textAlign: "center" }}>
                <Link to="#" className="btn btn-primary">Acessar Livro</Link>
                </div>
            </div>
            </div>
        </div>
        </section>
        
        <div className="divider"></div>
        <Footer/>
    </>
  );
};

export default Livro;
