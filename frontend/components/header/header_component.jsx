// header should render the logo, "tag", search bard
import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  debugger;
  props.id = 
  // let sessionLinks;
  // // if (id)

  return (
    <div>
      <Link to="/">
        <h1>Bandlamp: Spotlight On Your Favorite Music.</h1>
      </Link>
      <input type="text" placeholder="Search..." />
      <Link to="/users/login">Log In</Link>
      <Link to="/users/signup">Sign Up</Link>
    </div>
  );
};

export default Header;
