import navbar_container from "../header/navbar_container";

import React from "react";
import { Link } from "react-router-dom";

const WelcomeModal = () => {
  return (
    <div className="welcome">
      <h2 className="message">Sign up for a Bandlamp account</h2>
      <ul className="accounts">
        <li className="artist">
          <div className="icon"></div>
          <div className="description"></div>
          <Link to="/users/signup">
            <button>Sign up as an Artist</button>
          </Link>
        </li>
        <li className="demo-user">
          <div className="icon"></div>
          <div className="description"></div>
          <Link
            to={{
              pathname: "/users/login",
              type: "demo",
            }}
          >
            <button>Sign up as Demo User</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default WelcomeModal;
