import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="outer-link-container">
        <div className="inner-link-container">
          <div className="link-column1">
            <ul>
              <li>
                <Link to="/users/login">Log in!</Link>
              </li>
              <li>
                <Link to="/users/signup">Sign up!</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/users/login",
                    type: "demo",
                  }}
                >
                  Sign in as Demo User
                </Link>
              </li>
            </ul>
          </div>
          <div className="link-column2">
            <ul>
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">About me!</a>
              </li>
              <li>
                <a href="#">Resume!</a>
              </li>
              <li>
                <a href="#">hire me?</a>
              </li>
            </ul>
          </div>
          <div className="link-column3"></div>
          <div className="link-column4">
            <ul>
              <li>
                <a href="#">Favorites</a>
              </li>
              <li>
                <a href="#">Music?</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
