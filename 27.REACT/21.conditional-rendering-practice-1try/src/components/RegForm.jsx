import React from "react";
import Input from "./Input";
import Button from "./Button";

function RegForm() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username"/>
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Button type="submit" value="Register"/>
    </form>
  );
}

export default RegForm;
