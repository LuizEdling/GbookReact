import React from "react";
import '../../assets/CardItemP.css'; // Importando o CSS ListagemCards
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando bootstrap

export default function CardItemP(props){
  return(
    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
        <div className="card">
            <img src={props.capaLivro} className="card-img-top" alt="Nome do Livro 1"/>
            <div className="card-body">
                <h6 className="card-title">{props.nomeLivro}</h6>
            </div>
        </div>
    </div>
  );
}