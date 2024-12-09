import React from "react";
import Form from "./Form";

const isLogedIn = false;

function App() {
  return (
    <div className="container">
      {isLogedIn ? <h1>Hello</h1> : <Form />}
    </div>
  );
}

export default App;
