import React from "react";
import { connect } from "react-redux";
import UserDropdown from "./dropdown";
import { Link } from "react-router-dom";
import SearchBar from "./search_bar";

const UserNav = ({ currentUser, logout, user, searchArtist }) => {
  return (
    <div className="outer-user-nav">
      <div className="user-nav">
        <div className="user-nav-left">
          <div>
            <Link to="/">
              <img src={window.logo} alt="bandlamp logo" className="logo" />
            </Link>
          </div>

          <SearchBar searchArtist={searchArtist} />
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
          <UserDropdown currentUser={currentUser} logout={logout} user={user} />
        </div>
      </div>
    </div>
  );
};

export default UserNav;
