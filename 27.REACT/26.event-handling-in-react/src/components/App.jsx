import React, { useState } from "react";
import { use } from "react";

const customStyleBtn = {
  backgroundColor: "#000",
  color: "#fff",
};

function App() {
  const [heading, setHeading] = useState("Hello");
  const [btnChange, setStyle] = useState(false);

  function changeStyleBtnOver() {
    setStyle(true);
  }
  function removeStyleBtnOver() {
    setStyle(false)
  }

  function changeState() {
    setHeading("Submited");
  }


  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={btnChange ? customStyleBtn : null}
        onClick={changeState}
        onMouseOver={changeStyleBtnOver}
        onMouseOut={removeStyleBtnOver}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
