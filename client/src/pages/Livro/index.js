import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../Livro/Livro.css';
import capaBranca from '../../assets/images/capa-branca.jpg';

export default function Livro() {
  const livro = {
    capa: capaBranca,
    nome: "Nome do Livro",
    autor: "Autor",
    descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem odit repellat. Officiis, at incidunt? At dolorem consectetur fugit perspiciatis aliquam, laborum molestiae excepturi earum nesciunt esse amet vitae maiores."
  };

  return (
    <div>
        <Header/>
        <div className="livro">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 book-cover">
                <img 
                  src={livro.capa} 
                  alt="Capa do Livro" 
                  className="img-fluid" 
                />
              </div>
            <div className="col-md-6 book-info">
              <div className="title-and-back">
                <h2>{livro.nome}</h2>
              </div>
              <h3>{livro.autor}</h3>
              <p>{livro.descricao}</p>
              <div style={{ textAlign: "center" }}>
                <Link to="#" className="btn btn-primary btn-color">Acessar Livro</Link>
              </div>
            </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  );
};