import React, { useState } from "react";

function App() {
  let [timeHook, setTime] = useState(new Date().toLocaleTimeString());

  function showTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(showTime, 1000);

  return (
    <div className="container">
      <h1>{timeHook}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
