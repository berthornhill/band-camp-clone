// nav should render the logo, "tag", search bard
import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout, openModal }) => {
  // let sessionLinks;
  // // if (id)

  // debugger;

  const sessionButtons = currentUser ? (
    <div>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    [
      <li>
        <Link to="" onClick={() => openModal()}>
          Sign Up
        </Link>
      </li>,
      <li>
        <Link to="/users/login">Log In</Link>
      </li>,
    ]
  );

  return (
    <div className="nav">
      <div className="nav-left">
        <div>
          <Link to="/">
            <img src={window.logo} alt="bandlamp logo" className="logo" />
          </Link>
        </div>
        <div>
          <h2>
            Shinining a spotlight on
            <span className="grad-text"> music and the artists</span> who create
            it.
          </h2>
        </div>
      </div>
      <div className="nav-right">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search and discover music"
            className="search-field"
          />
          <img src={window.bulb} alt="search icon" className="search-icon" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <span className="grad-text"> Hire Me!</span>
            </li>
            {sessionButtons}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
