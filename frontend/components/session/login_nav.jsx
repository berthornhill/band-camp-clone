import React from "react";
import { Link } from "react-router-dom";

const LoginNav = () => {
  return (
    <div className="login-nav">
      <Link to="/">
        <img src={window.logo} alt="bandlamp logo" className="logo" />
      </Link>
    </div>
  );
};

export default LoginNav;
