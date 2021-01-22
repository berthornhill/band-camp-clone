// header should render the logo, "tag", search bard
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ currentUser, logout }) => {
  debugger;

  // let sessionLinks;
  // // if (id)

  const sessionButtons = currentUser ? (
    <div>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link to="/users/login">Log In</Link>
      <Link to="/users/signup">Sign Up</Link>
    </div>
  );

  return (
    <div className="header">
      <div className="header-right">
        <Link to="/">
          <img src={window.logo} alt="bandlamp logo" id="logo" />
        </Link>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search..." />
        {sessionButtons}
      </div>
    </div>
  );
};

export default Header;
