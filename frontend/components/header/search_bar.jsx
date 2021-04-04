import React from "react";
import { render } from "react-dom";
import { Redirect, withRouter } from "react-router-dom";
import SearchDropdown from "./search_dropdown";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchCriteria: "",
      redirect: false,
      displayDropDown: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.openCloseMenu = this.openCloseMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.delayClose = this.delayClose.bind(this);
  }

  openCloseMenu() {
    this.setState({ displayDropDown: true });
  }

  delayClose(e) {
    e.preventDefault;

    setTimeout(this.closeMenu, 200);
  }

  closeMenu() {
    this.setState({ displayDropDown: false });
  }

  renderRedirect() {
    this.state.redirect ? <Redirect to="/search" /> : null;
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ searchCriteria: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.closeMenu();

    this.props.searchArtist({ search: this.state.searchCriteria });

    this.props.history.push({
      pathname: "/search",
      search: `?results=${this.state.searchCriteria}`,
    });
  }

  render() {
    return (
      <form
        className="search-bar"
        onSubmit={this.handleSubmit}
        onFocus={this.openCloseMenu}
        onBlur={this.delayClose}
      >
        <input
          type="text"
          placeholder="Search and discover music"
          className="search-field"
          value={this.state.searchCriteria}
          onChange={this.handleChange}
        />

        <img
          src={window.bulb}
          alt="search icon"
          className="search-icon"
          onClick={this.handleSubmit}
        />
        {this.state.displayDropDown ? <SearchDropdown /> : null}
      </form>
    );
  }
}

export default withRouter(SearchBar);
