// nav should render the logo, "tag", search bard
import React from "react";
import { Link } from "react-router-dom";
import UserNav from "./user_nav";

const NavBar = ({ currentUser, user, logout, openModal }) => {
  // let sessionLinks;
  // // if (id)

  // debugger;

  const sessionButtons = currentUser ? (
    <div>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    [
      <li key="1">
        <Link to="" onClick={() => openModal()}>
          Sign Up
        </Link>
      </li>,
      <li key="2">
        <Link to="/users/login">Log In</Link>
      </li>,
    ]
  );

  if (currentUser) {
    return <UserNav currentUser={currentUser} logout={logout} user={user} />;
  }

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
            <li key="1">
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
