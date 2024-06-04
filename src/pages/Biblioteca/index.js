import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardsBiblioteca from '../../components/CardsBiblioteca';
import '../../assets/Biblioteca.css'; // Importando CSS

// Dados para os cartões
const sectionData = {
  engenharias: {
    title: "Engenharia Agronômica",
    cards: [
      {
        imgSrc: require('../../assets/images/eng-agro.jpg'),
        imgAlt: "Engenharia Agronômica",
        title: "Engenharia Agronômica",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/eng-civil.jpg'),
        imgAlt: "Engenharia Civil",
        title: "Engenharia Civil",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/eng-eletrica.png'),
        imgAlt: "Engenharia Elétrica",
        title: "Engenharia Elétrica",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/eng-mecanica.png'),
        imgAlt: "Engenharia Mecânica",
        title: "Engenharia Mecânica",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/eng-soft.png'),
        imgAlt: "Engenharia de Software",
        title: "Engenharia de Software",
        link: "#",
      },
    ],
  },
  cienciasSaude: {
    title: "Ciências da Saúde",
    cards:[
      {
        imgSrc: require('../../assets/images/biomed.png'),
        imgAlt: "Biomedicina",
        title: "Biomedicina",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/enfermagem.png'),
        imgAlt: "Enfermagem",
        title: "Enfermagem",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/farmacia.png'),
        imgAlt: "Farmacia",
        title: "Farmacia",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/fisioterapia.png'),
        imgAlt: "Fisioterapia",
        title: "Fisioterapia",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/medicina.png'),
        imgAlt: "Medicina",
        title: "Medicina",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/med-vet.png'),
        imgAlt: "Medicina Veterinária",
        title: "Medicina Veterinária",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/nutricao.png'),
        imgAlt: "Nutrição",
        title: "Nutrição",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/odonto.png'),
        imgAlt: "Odontologia",
        title: "Odontologia",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/psicologia.png'),
        imgAlt: "Psicologia",
        title: "Psicologia",
        link: "#",
      },
    ],
  },
  cienciasSociais: {
    title: "Ciências Sociais Aplicadas ",
    cards: [
      {
        imgSrc: require('../../assets/images/adm.png'),
        imgAlt: "Administração",
        title: "Administração",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/contabeis.png'),
        imgAlt: "Ciências Contabeis",
        title: "Ciências Contabeis",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/direito.png'),
        imgAlt: "Direito",
        title: "Direito",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/publi.png'),
        imgAlt: "Publicidade e Propaganda",
        title: "Publicidade e Propaganda",
        link: "#",
      },
      {
        imgSrc: require('../../assets/images/arq-urb.png'),
        imgAlt: "Arquitetura e Urbanismo",
        title: "Arquitetura e Urbanismo",
        link: "#",
      },
    ],
  },
};

export default function Biblioteca() {
  return (
    <div>
      <Header />
      <div className="divider"></div>
      <CardsBiblioteca sectionId="engenharias" sectionData={sectionData} />
      <CardsBiblioteca sectionId="cienciasSaude" sectionData={sectionData} />
      <CardsBiblioteca sectionId="cienciasSociais" sectionData={sectionData} />
      <div className='divider'></div>
      <Footer />
    </div>
  );
}