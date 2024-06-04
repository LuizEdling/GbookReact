import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link do react-router-dom

import Header from '../../components/Header';// importa o Header
import Footer from '../../components/Footer'; //importa o Footer

import '../../assets/Disciplinas.css'; // importa o CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // importa o bootstrap


// importando as imagens das disciplinas e a foto de perfil
import FotoUsuario from '../../assets/images/perfil-semfoto.jpg';
import Capa1 from '../../assets/images/disciplina01.png';
import Capa2 from '../../assets/images/disciplina02.png';
import Capa3 from '../../assets/images/disciplina03.png';
import Capa4 from '../../assets/images/disciplina04.png';
import Capa5 from '../../assets/images/disciplina05.png';


// criando um componente Disciplinas
const Disciplinas = () => {

  // com um array Disciplinas
  const disciplinas = [
    { id: 1, titulo: 'Desenvolvimento de Sistemas para Web/Mobile I', capa: Capa1 },
    { id: 2, titulo: 'Banco de Dados I', capa: Capa2 },
    { id: 3, titulo: 'Análise e Projetos de Sistemas I', capa: Capa3 },
    { id: 4, titulo: 'Normatização de Processo de Software', capa: Capa4 },
    { id: 5, titulo: 'Propriedade Intelectual e Legislação Tec.', capa: Capa5 }
  ];

  return (
    <>
      <Header />
      <div className="divider"></div>

      <section id="disciplinas">
        {/*usado o método .map, que pega o array de disciplinas e  executa cada elemnto*/}
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
                {/* define o destino do link, modificando lá na url*/}
                <Link to={`/pageDisciplinas/${encodeURIComponent(disciplina.titulo)}`} className="link"> 
                  <button className="acessar-disciplina">Acessar Disciplina</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="divider"></div>
      <Footer />
    </>
  );
};


export default Disciplinas;
