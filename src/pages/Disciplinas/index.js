import React from 'react';
import Header from '../../components/Header'; //importa o header
import Footer from '../../components/Footer'; // importa o footer
import '../../assets/Disciplinas.css'; // importa o css
import 'bootstrap/dist/css/bootstrap.min.css'; // importa o bootstrap

import FotoUsuario from '../../assets/images/perfil-semfoto.jpg';
import Capa1 from '../../assets/images/disciplina01.png';
import Capa2 from '../../assets/images/disciplina02.png';
import Capa3 from '../../assets/images/disciplina03.png';
import Capa4 from '../../assets/images/disciplina04.png';
import Capa5 from '../../assets/images/disciplina05.png';

const Disciplinas = () => {
  const disciplinas = [
    { id: 1, titulo: 'Desenvolvimento de Sistemas para Web/Mobile I', link: 'livros-materia1.html', capa: Capa1 },
    { id: 2, titulo: 'Banco de Dados I', link: 'livros-materia2.html', capa: Capa2 },
    { id: 3, titulo: 'Análise e Projetos de Sistemas I', link: 'livros-materia3.html', capa: Capa3 },
    { id: 4, titulo: 'Normatização de Processo de Software', link: 'livros-materia4.html', capa: Capa4 },
    { id: 5, titulo: 'Propriedade Intelectual e Legislação Tec.', link: 'livros-materia5.html', capa: Capa5 }
  ];

  return (
    <>
      <Header />
      <section id="disciplinas">
        {disciplinas.map(disciplina => (
          <div key={disciplina.id} className="disciplina" style={{ backgroundImage: `url(${disciplina.capa})` }}>
            <div className="capa">
              <div className="conteudo">
                <h2>{disciplina.titulo}</h2>
                <img
                  src={FotoUsuario}
                  alt="Foto do Professor"
                  className="fotoUsuario"
                />
                <a href={disciplina.link}>
                  <button className="acessar-disciplina">Acessar Disciplina</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Disciplinas;
