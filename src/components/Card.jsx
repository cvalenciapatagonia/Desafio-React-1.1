import React from "react";
import Tags from "./Tags"; // Importa el componente Tags


function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={props.hipervinculo} alt={props.nombre} />
        <h2>{props.nombre}</h2>
        <p>{props.descripcion}</p>
        <Tags tagText={props.tagText} tagColor={props.tagColor} />
      </div>
    </div>
  );
}

export default Card;
