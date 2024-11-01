import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando bootstrap

export default function CardListP(props) {
  return (
    <div>
      <h3>{props.titulo}</h3>
      <div className="container mt-4">
        <div className="row flex-nowrap overflow-auto">
          {props.children}
        </div>
      </div>
    </div>
  );
};
