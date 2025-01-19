import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  function changeTextHeding() {
    setHeadingText("Submited");
  }

  const [changeButton, setChangeButton] = useState(false);
  function changeButtonColour() {
    setChangeButton(true);
  }
  function removeButtonColour() {
    setChangeButton(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={changeTextHeding}
        onMouseOver={changeButtonColour}
        onMouseOut={removeButtonColour}
        style={changeButton ? { backgroundColor: "black" } : null}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
