import React from "react";
import RegForm from "./RegForm";
import LogInForm from "./LogInForm";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <LogInForm /> : <RegForm />}
    </div>
  );
};

export default App;

