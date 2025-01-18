import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  function increaseCount() {
    return setCount(count + 1);
  }

  function decreaseCount() {
    return setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decreaseCount}>-</button>
      <button onClick={increaseCount}>+</button>
    </div>
  );
}

export default App;
