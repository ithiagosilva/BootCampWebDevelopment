import React, { useState } from "react";

function App() {
  const [typedText, setTypedText] = useState("");
  function handleChange(event) {
    setTypedText(event.target.value);
  }

  const [submitedText, setSubmitedText] = useState("");
  function submited() {
    setSubmitedText(typedText);
  }

  function preventRefresh(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {submitedText}</h1>
      <form action="" onSubmit={preventRefresh}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={typedText}
        />
        <button onClick={submited}>Submit</button>
      </form>
    </div>
  );
}

export default App;
