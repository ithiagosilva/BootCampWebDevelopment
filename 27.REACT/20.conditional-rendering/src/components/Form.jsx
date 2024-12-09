import React from "react";
import Input from "./Input";

function Form() {
    return <form className="form">
    <Input type="text" placeholder="User Name" />
    <Input type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
};

export default Form;