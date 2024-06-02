import React from 'react';
import { Link } from 'react-router-dom'; // Se necessário
import '../../assets/CardsDisciplinas.css' // importando o css
import 'bootstrap/dist/css/bootstrap.min.css'; // importa o bootstrap

const CardsDisciplinas = ({ imagemFundo, titulo, imagemProfessor, link }) => {
    const disciplinas = [
        { id: 1, imagem: require('../../assets/images/disciplina01.png')},
        { id: 2, imagem: require('../../assets/images/disciplina02.png')},
        { id: 3, imagem: require('../../assets/images/disciplina03.png')},
        { id: 4, imagem: require('../../assets/images/disciplina04.png')},
        { id: 5, imagem: require('../../assets/images/disciplina05.png')}
    ]

    return (
        <div className="disciplina">
            <div className="capa">
                <img src={imagemFundo} alt="Capa da Disciplina" className="imagem-fundo" />
                <div className="conteudo">
                    <h2>{titulo}</h2>
                    <img src={imagemProfessor} alt="Foto do Professor" className="foto-professor" />
                    <Link to={link}>
                        <button className="acessar-disciplina">Acessar Disciplina</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardsDisciplinas;
