import React from "react";
import '../../assets/CardItemP.css'; // Importando o CSS ListagemCards
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando bootstrap

export default function CardItemP(props) {
  const { capaLivro, nomeLivro } = props; // Destructuring para acessar props mais facilmente

  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
      <div className="card card-item">
        <img src={capaLivro} className="card-img-top card-item-img" alt="Capa do Livro" />
        <div className="card-body">
          <h6 className="card-title">{nomeLivro}</h6>
        </div>
      </div>
    </div>
  );
}
