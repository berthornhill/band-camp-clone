import React from "react";
import { connect } from "react-redux";
import UserDropdown from "./dropdown";
import { Link } from "react-router-dom";

const UserNav = ({ currentUser, logout }) => {
  return (
    <div className="outer-user-nav">
      <div className="user-nav">
        <div className="user-nav-left">
          <div>
            <Link to="/">
              <img src={window.logo} alt="bandlamp logo" className="logo" />
            </Link>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search and discover music"
              className="search-field"
            />
            <img src={window.bulb} alt="search icon" className="search-icon" />
          </div>
        </div>
        <div className="user-nav-right">
          <div>
            <span className="grad-text"> Hire Me!</span>
          </div>
          <div className="bolt">
            <img src={window.bolt}></img>
          </div>
          <div className="heart">
            <img src={window.heart}></img>
          </div>
          <UserDropdown currentUser={currentUser} logout={logout} />
        </div>
      </div>
    </div>
  );
};

export default UserNav;
