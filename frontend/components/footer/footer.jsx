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
                <Link to="/artist/308">About the developer</Link>
              </li>
              <li>
                <a href="https://github.com/berthornhill" target="_blank">
                  Github
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  target="_blank"
                >
                  View my resume
                </a>
              </li> */}
            </ul>
          </div>
          <div className="link-column3"></div>
          <div className="link-column4">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/bert-hill-0324b120/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://angel.co/u/bert-hill-2" target="_blank">
                  Anglel List
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
