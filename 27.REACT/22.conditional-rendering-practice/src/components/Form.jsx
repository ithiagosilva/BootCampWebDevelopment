import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="User name"/>
      <Input type="password" placeholder="Password" />
      {!props.isRegistered && <Input type="password" placeholder="Confirm Password" />}
      
      <button type="submit">{props.isRegistered ? "login" : "Register"}</button>
    </form>
  );
}

export default Form;
