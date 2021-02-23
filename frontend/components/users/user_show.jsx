import React from "react";
import { Link } from "react-router-dom";

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
    return (
      <div id="user-background">
        <div id="color-bar"></div>
        <div id="user-outer">
          <div id="user-inner">
            <div className="header-container">
              <h1>--BANDNAME--! This is your dashboard.</h1>
              <Link to="">www.bandlink.###</Link>
            </div>
            <div className="user-grid-box">
              <div className="left-side">
                <div classname="left-contents"></div>
              </div>
              <div className="right-side">
                <div className="right-contents"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;
