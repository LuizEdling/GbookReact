import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando bootstrap

export default function CardListP(props) {
  return (
    <div id="CardsListP">
      <h2 class="texto-branco">{props.titulo}</h2>
      <div class="container mt-4">
        <div class="row flex-nowrap overflow-auto">
          {props.children}
        </div>
      </div>
    </div>
  );
};
