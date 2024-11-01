import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Bootstrap

export default function CardsListG(props){
  return (
    <div>
      <div id="CardsListG" class="container mt-4">
        <h2>{props.titulo}</h2>
        <div class="row justify-content-center">
          {props.children}
        </div>
      </div>
    </div>
  );
}