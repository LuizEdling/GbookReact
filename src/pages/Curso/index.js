import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/Curso.css'

function Curso() { 
  const { title } = useParams();

  return (
    <>
      <Header/>
      
      <div className='titulo'>
        <h1>{title}</h1>
      </div>
      <Footer/>
    </>    
  );
}

export default Curso;
