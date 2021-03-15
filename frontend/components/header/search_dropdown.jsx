import React from "react";
import { connect } from "react-redux";
import { Link, withRouter, useHistory } from "react-router-dom";

class SearchDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();

    this.props.history.push(`/tags/${e.target.id}`);
  }

  render() {
    const tags = [
      ["electronic", "orange"],
      ["metal", "sherbert"],
      ["rock", "red"],
      ["alternative", "fusia"],
      ["hip-hop/rap", "lavender"],
      ["experimental", "violet"],
      ["punk", "purple"],
      ["pop", "blue"],
      ["ambient", "grey"],
      // ["browse all", "brown"],
    ];

    const tagsList = tags.map((tag, i) => {
      return (
        <li className={tag[1]} onClick={this.handleClick} key={i}>
          <div id={tag[0]} onClick={this.handleClick}>
            <span>{tag[0]}</span>
            <span>{">"}</span>
          </div>
        </li>
      );
    });

    return (
      <div id="search-dropdown" onClick={this.handleClick}>
        <ul>{tagsList}</ul>
      </div>
    );
  }
}

export default withRouter(SearchDropdown);
