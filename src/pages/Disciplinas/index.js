import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardsDisciplinas from '../../components/CardsDisciplinas';

import 'bootstrap/dist/css/bootstrap.min.css'; // importa o bootstrap

const Disciplinas = () => {
    return (
        <>
            <Header />
            <div className="disciplinas-container">
                <CardsDisciplinas
                    imagemFundo={require('../../assets/images/disciplina01.png')}
                    titulo="Matéria 1 - Curso"
                    imagemProfessor={require('../../assets/images/perfil-semfoto.jpg')}
                    link="/livros-materia1"
                />
                <CardsDisciplinas
                    imagemFundo={require('../../assets/images/disciplina02.png')}
                    titulo="Matéria 2 - Curso"
                    imagemProfessor={require('../../assets/images/perfil-semfoto.jpg')}
                    link="/livros-materia2"
                />
                <CardsDisciplinas
                    imagemFundo={require('../../assets/images/disciplina03.png')}
                    titulo="Matéria 3 - Curso"
                    imagemProfessor={require('../../assets/images/perfil-semfoto.jpg')}
                    link="/livros-materia3"
                />
                <CardsDisciplinas
                    imagemFundo={require('../../assets/images/disciplina04.png')}
                    titulo="Matéria 4 - Curso"
                    imagemProfessor={require('../../assets/images/perfil-semfoto.jpg')}
                    link="/livros-materia4"
                />
                <CardsDisciplinas
                    imagemFundo={require('../../assets/images/disciplina05.png')}
                    titulo="Matéria 5 - Curso"
                    imagemProfessor={require('../../assets/images/perfil-semfoto.jpg')}
                    link="/livros-materia5"
                />
            </div>
            <Footer />
        </>
    );
};

export default Disciplinas;
