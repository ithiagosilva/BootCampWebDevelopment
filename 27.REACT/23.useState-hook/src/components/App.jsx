import React, {useState} from "react";


const [count, setCount] = useState(0);

function increaseCount() {
  setCount(count + 1);
}; 

function decreaseCount() {
  setCount(count - 1);
};

function App() {
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
}

export default App;
