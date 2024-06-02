import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando bootstrap
import '../../assets/ListagemCardsPequenos.css'; // Importando CSS ListagemCardsPequenos

const ListagemCardsPequenos = ({ Titulo }) => {
    const livros = [
        { id: 1, titulo: "Primeiro livro", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa placeat nam necessitatibus totam doloremque?", imagem: require('../../assets/images/capa-branca.jpg'), link: "/Livros" },
        { id: 2, titulo: "Segundo livro", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa placeat nam necessitatibus totam doloremque?", imagem: require('../../assets/images/capa-branca.jpg'), link: "/Livros" },
        { id: 3, titulo: "Terceiro livro", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa placeat nam necessitatibus totam doloremque?", imagem: require('../../assets/images/capa-branca.jpg'), link: "/Livros" },
        { id: 4, titulo: "Quarto livro", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa placeat nam necessitatibus totam doloremque?", imagem: require('../../assets/images/capa-branca.jpg'), link: "/Livros" }
    ];

    return (
        <section className="CardPequeno container mt-4">
            <h1 className="titulo">{Titulo}</h1> {/* Adicionei a classe "titulo" aqui */}
            <div className="container mt-4">
                <div className="row flex-nowrap overflow-auto">
                    {livros.map((livro) => (
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={livro.id}>
                            <div className="card">
                                <img src={livro.imagem} className="card-img-top" alt={livro.titulo} />
                                <div className="card-body">
                                    <h6 className="card-title">{livro.titulo}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ListagemCardsPequenos;
