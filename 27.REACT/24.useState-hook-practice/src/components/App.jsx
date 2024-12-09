import React, {useState} from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [hours, setCount] = useState(0);
  
  function getTime() {
    setCount(time)
  };
  
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={setInterval(getTime, 1000)}>Get Time</button>
    </div>
  );
}

export default App;
