import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState("");

  function handleName(event) {
    setName(event.target.value)
  }
  function valueName() {
    setShowName(name)
  }

  return (
    <div className="container">
      <h1>Hello {showName}</h1>
      <input onChange={handleName} type="text" placeholder="What's your name?" />
      <button onClick={valueName}>Submit</button>
    </div>
  );
}

export default App;
