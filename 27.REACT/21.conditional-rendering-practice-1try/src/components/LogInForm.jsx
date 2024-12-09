import React from "react";
import Input from "./Input";
import Button from "./Button";

function LogInForm() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username"/>
      <Input type="password" placeholder="Password" />
      <Button type="submit" value="Log In"/>
    </form>
  );
}

export default LogInForm;
