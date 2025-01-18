import React from "react";
import Login from "./Login";

const isLogedIn = false;

function App() {
  return (
    <div className="container">
      {isLogedIn ? <h1>HELLO User</h1> : <Login />}
    </div>
  );
}

export default App;
