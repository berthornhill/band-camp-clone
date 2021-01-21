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
    <div>
      <Link to="/">
        <h1>Bandlamp: Spotlight On Your Favorite Music.</h1>
      </Link>
      <input type="text" placeholder="Search..." />
      {sessionButtons}
    </div>
  );
};

export default Header;
