import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SearchDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    debugger;
    e.stopPropagation();
    console.log("Stop the Prop!");
  }

  render() {
    return (
      <div id="search-dropdown" onClick={this.handleClick}>
        {console.log("Menu Open!")}
        <ul>
          <li className="orange" onClick={this.handleClick}>
            <Link to="/tags/electronic" onClick={this.handleClick}>
              <span>electronic</span>
              <span>{">"}</span>
            </Link>
          </li>
          <li className="sherbert">
            <Link to="/tags/metal">
              {" "}
              <span>metal</span>
              <span>{">"}</span>
            </Link>
          </li>
          <li className="red">
            <Link to="/tags/rock">
              {" "}
              <span>rock</span>
              <span>{">"}</span>
            </Link>
          </li>
          <li className="fusia">
            <Link to="/tags/alternative">
              {" "}
              <span>alternative</span>
              <span>{">"}</span>
            </Link>
          </li>
          <li className="lavender">
            <Link to="/tags/hip-hop/rap">
              {" "}
              <span>hip-hop/rap</span>
              <span>{">"}</span>
            </Link>
          </li>
          <li className="violet">
            <Link to="/tags/experimental">
              {" "}
              <span>experimental</span>
              <span>{">"}</span>
            </Link>
          </li>
          <li className="purple">
            <Link to="/tags/punk">
              {" "}
              <span>punk</span>
              <span>{">"}</span>
            </Link>
          </li>
          <li className="blue">
            <Link to="/tags/pop">
              {" "}
              <span>pop</span>
              <span>{">"}</span>
            </Link>
          </li>
          <li className="grey">
            <Link to="/tags/ambient">
              {" "}
              <span>ambient</span>
              <span>{">"}</span>
            </Link>
          </li>
          <li className="brown">
            <Link to="/tags/">
              {" "}
              <span>browse all</span>
              <span>{">"}</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SearchDropdown;
