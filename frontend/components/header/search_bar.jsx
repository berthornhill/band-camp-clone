import React from "react";
import { render } from "react-dom";
import { Redirect, withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.state = {
      searchCriteria: "",
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  renderRedirect() {
    // debugger;
    this.state.redirect ? <Redirect to="/search" /> : null;
  }

  handleChange(e) {
    // debugger;
    // return (e) => {

    e.preventDefault();
    // debugger;
    this.setState({ searchCriteria: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.searchArtist({ search: this.state.searchCriteria });
    // this.setState({ redirect: true });3
    // debugger;
    // this.props.history.push("/search");

    this.props.history.push({
      pathname: "/search",
      search: `?results=${this.state.searchCriteria}`,
    });
  }

  render() {
    // debugger;
    return (
      <div>
        <form className="search-bar" onSubmit={this.handleSubmit}>
          <div>{this.renderRedirect()}</div>
          <input
            type="text"
            placeholder="Search and discover music"
            className="search-field"
            value={this.state.searchCriteria}
            onChange={this.handleChange}
          />
          <img src={window.bulb} alt="search icon" className="search-icon" />
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
