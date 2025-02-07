import React from "react";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} width={props.width} alt={props.alt} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
