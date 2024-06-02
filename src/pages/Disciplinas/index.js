import React from 'react';
import Header from '../../components/Header'; // Importando o Header
import Footer from '../../components/Footer'; // Importando o Footer
import CardsDisciplinas from '../../components/CardsDisciplinas'; // Importando os cards
import '../../assets/Disciplinas.css'; // Importando arquivo CSS de disciplinas

export default function Disciplinas () {
    return (
        <>
            <Header />
            <Disciplinas
                imagemFundo="disciplina01.png"
                titulo="Matéria 1 - Curso"
                imagemProfessor="perfil-semfoto.jpg"
                link="livros-materia1.html"
            />
            <Footer />
        </>
    );
};
