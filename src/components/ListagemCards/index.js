import React from 'react';
import '../../assets/ListagemCards.css'; // Importando o CSS ListagemCards
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Bootstrap


const MaisAcessados = ({ titulo }) => {
  const livros = [
    { id: 1, titulo: "Primeiro livro", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa placeat nam necessitatibus totam doloremque?", imagem: require('../../assets/images/capa-branca.jpg'), link: "/Livros" },
    { id: 2, titulo: "Segundo livro", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa placeat nam necessitatibus totam doloremque?", imagem: require('../../assets/images/capa-branca.jpg'), link: "/Livros" },
    { id: 3, titulo: "Terceiro livro", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa placeat nam necessitatibus totam doloremque?", imagem: require('../../assets/images/capa-branca.jpg'), link: "/Livros" },
    { id: 4, titulo: "Quarto livro", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa placeat nam necessitatibus totam doloremque?", imagem: require('../../assets/images/capa-branca.jpg'), link: "/Livros" }
  ];


  return (
    <section id="MaisAcessados" className="container mt-4">
      <h1>{titulo}</h1>
      <div className="row justify-content-center">
        {livros.map(livro => (
          <div key={livro.id} className="col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch">
            <div className="card mx-auto">
              <img src={livro.imagem} className="card-img-top card-img-size" alt={livro.titulo} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{livro.titulo}</h5>
                <p className="card-text">{livro.descricao}</p>
                <a href={livro.link} className="btn btn-primary mt-auto">Ler mais</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default MaisAcessados;
