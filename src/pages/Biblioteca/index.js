import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardsBiblioteca from '../../components/CardsBiblioteca';
import '../../assets/Biblioteca.css'; // Importando CSS 

const Modulos = {
  engenharias: {
    title: "Engenharias",
    cards: [
      { link: "../Cursos-eng/eng-agro.html", imgSrc: "assets/images/eng-agro.jpg", imgAlt: "Eng. Agronômica", title: "Eng. Agronômica" },
      { link: "../Cursos-eng/eng-civil.html", imgSrc: "assets/images/eng-civil.jpg", imgAlt: "Eng. Civil", title: "Eng. Civil" },
      { link: "../Cursos-eng/eng-soft.html", imgSrc: "assets/images/eng-soft.png", imgAlt: "Eng. de Software", title: "Eng. de Software" },
      { link: "../Cursos-eng/eng-eletrica.html", imgSrc: "assets/images/eng-eletrica.png", imgAlt: "Eng. Elétrica", title: "Eng. Elétrica" },
      { link: "../Cursos-eng/eng-mecanica.html", imgSrc: "assets/images/eng-mecanica.png", imgAlt: "Eng. Mecânica", title: "Eng. Mecânica" },
    ]
  },
  saude: {
    title: "Ciências da Saúde",
    cards: [
      { link: "../Cursos-saude/biomedicina.html", imgSrc: "assets/images/saude/biomed.png", imgAlt: "Biomedicina", title: "Biomedicina" },
      { link: "../Cursos-saude/enfermagem.html", imgSrc: "assets/images/saude/enfermagem.png", imgAlt: "Enfermagem", title: "Enfermagem" },
      { link: "../Cursos-saude/farmacia.html", imgSrc: "assets/images/saude/farmacia.png", imgAlt: "Farmácia", title: "Farmácia" },
      { link: "../Cursos-saude/fisioterapia.html", imgSrc: "assets/images/saude/fisioterapia.png", imgAlt: "Fisioterapia", title: "Fisioterapia" },
      { link: "../Cursos-saude/medicina.html", imgSrc: "assets/images/saude/medicina.png", imgAlt: "Medicina", title: "Medicina" },
      { link: "../Cursos-saude/med-vet.html", imgSrc: "assets/images/saude/med-vet.png", imgAlt: "Medicina Veterinária", title: "Med. Veterinária" },
      { link: "../Cursos-saude/nutri.html", imgSrc: "assets/images/saude/nutricao.png", imgAlt: "Nutrição", title: "Nutrição" },
      { link: "../Cursos-saude/odonto.html", imgSrc: "assets/images/saude/odonto.png", imgAlt: "Odontologia", title: "Odontologia" },
      { link: "../Cursos-saude/psicologia.html", imgSrc: "assets/images/saude/psicologia.png", imgAlt: "Psicologia", title: "Psicologia" },
    ]
  },
  cienciasSociaisAplicadas: {
    title: "Ciências Sociais Aplicadas",
    cards: [
      { link: "../Cursos-c-s-a/adm.html", imgSrc: "assets/images/ciencias-s-a/adm.png", imgAlt: "Administração", title: "Administração" },
      { link: "../Cursos-c-s-a/ciencias-cont.html", imgSrc: "assets/images/ciencias-s-a/contabeis.png", imgAlt: "Ciências Contábeis", title: "Ciências Contábeis" },
      { link: "../Cursos-c-s-a/direito.html", imgSrc: "assets/images/ciencias-s-a/direito.png", imgAlt: "Direito", title: "Direito" },
      { link: "../Cursos-c-s-a/publi.html", imgSrc: "assets/images/ciencias-s-a/publi.png", imgAlt: "Publicidade e Propaganda", title: "Publicidade e P." },
      { link: "../Cursos-c-s-a/arq-urb.html", imgSrc: "assets/images/ciencias-s-a/arq-urb.png", imgAlt: "Arquitetura e Urbanismo", title: "Arquitetura e Urb." },
    ]
  }
};

function Biblioteca () {
  return (
    <main>
        <Header/>
        <div className="divider"></div>
        {Object.keys(Modulos).map(sectionId => (
          <CardsBiblioteca key={sectionId} sectionId={sectionId} sectionData={Modulos[sectionId]} />
        ))}
        <div className="divider"></div>
        <Footer/>
    </main>
  );
}

export default Biblioteca;
