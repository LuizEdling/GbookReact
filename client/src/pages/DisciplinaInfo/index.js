import React from 'react';
import './DisciplinaInfo.css'; 

import Header from '../../components/Header'; 
import Footer from '../../components/Footer'; 

import SubjectInfo from '../../components/SubjectInfo';

export default function DisciplinaInfo() {
  return (
    <div>
      <Header/>
      <SubjectInfo />
      <Footer/>
    </div>    
  );
}
