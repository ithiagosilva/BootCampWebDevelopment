//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display a h1 heading.
ReactDOM.render(
  <div>
    <h1>My list</h1>
    <ul>
      <li>Suco</li>
      <li>Salgados</li>
      <li>Bolo</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
