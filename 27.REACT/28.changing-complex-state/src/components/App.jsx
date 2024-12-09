import React, {useState} from "react";


function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");


  function showFname(event) {
    setFName(event.target.value)
  };

  function showLname(event) {
    setLName(event.target.value)
  };

  function removeRefresh(e) {
    e.preventDefault()
  };

  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form onSubmit={removeRefresh}>
        <input onChange={showFname} name="fName" placeholder="First Name" value={fName} />
        <input onChange={showLname} name="lName" placeholder="Last Name" value={lName}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
