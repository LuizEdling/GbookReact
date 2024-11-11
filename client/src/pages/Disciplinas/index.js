import React from 'react';
import '../Disciplinas/Disciplinas.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ShowSubjects from '../../components/ShowSubjects';

// criando um componente Disciplinas
export default function Disciplinas() {
  return (
    <div>
      <Header />
      <ShowSubjects />
      <Footer />
    </div>
  );
};