import React from 'react';
import './SubjectInfo.css'; 

import { useParams } from 'react-router-dom';

export default function SubjectInfo() {
  const { title } = useParams();

  return (
    <div className='subjectInfo'>
      <div className='title'>
        <h1>{title}</h1>
      </div>
      <div className='book-list'>
        {/*Lista de livros*/}
      </div>
    </div>    
  );
}

