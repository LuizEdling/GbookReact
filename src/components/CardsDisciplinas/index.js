import React from 'react';
import { Link } from 'react-router-dom'; // Se necessário
import '../../assets/CardsDisciplinas.css'

const CardsDisciplinas = ({ imagemFundo, titulo, imagemProfessor, link }) => {
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
