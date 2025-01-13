import React from "react";
import ReactDOM from "react-dom";

const customStyle = {};

const hour = new Date().getHours();
const min = new Date().getMinutes();
const hora = hour + ":" + min;
if (hour > 13) {
  customStyle.color = "Green";
}

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello World!</h1>
  </div>,
  document.getElementById("root")
);
