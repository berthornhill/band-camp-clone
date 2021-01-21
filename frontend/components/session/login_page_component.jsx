import React from "react";
import { Link } from "react-router-dom";
import LoginFormContainer from "./login_form_container";

const LoginPage = () => {
  console.log("Helloooooo");
  return (
    <div>
      <header>
        <h1>bandlamp</h1>
      </header>
      <LoginFormContainer />
    </div>
  );
};

export default LoginPage;
