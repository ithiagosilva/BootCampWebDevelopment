import React from "react";
import ReactDOM from "react-dom";

const fName = "Thiago";
const lName = "Silva";
const luckNumber = Math.floor(Math.random() * 10 + 1);

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}
    </h1>
    <p>Your luck number today is: {luckNumber}</p>
  </div>,
  document.getElementById("root")
);
