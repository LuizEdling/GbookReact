import React from 'react';
import '../CardItemG/CardItemG.css'; // Importando o CSS ListagemCards
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando Bootstrap

export default function CardItemG(props){
  return(

      <div class="col-lg-3 col-md-6 col-sm-6 d-flex align-items-stretch">                
        <div class="card mx-auto">
          <img src={props.ImgCapa} class="card-img-top card-img-size" alt={props.alt}/>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{props.Titulo}</h5>
            <p class="card-text">{props.Desc}</p>
            <a href={props.href} class="btn btn-primary mt-auto">Ler mais</a>
          </div>    
        </div>               
      </div>

  );
}