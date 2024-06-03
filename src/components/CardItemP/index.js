import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando bootstrap

export default function CardItemP(props){
  return(
    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <div class="card">
            <img src={props.capaLivro} class="card-img-top" alt="Nome do Livro 1"/>
            <div class="card-body">
                <h6 class="card-title">{props.nomeLivro}</h6>
            </div>
        </div>
    </div>
  );
}