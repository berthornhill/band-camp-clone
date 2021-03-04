import React from "react";
import { Redirect, withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      searchCriteria: "",
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // debugger;
    // return (e) => {

    e.preventDefault();
    debugger;
    this.setState({ searchCriteria: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.searchArtist({ search: this.state.searchCriteria });
    this.props.history.push("/search");
  }

  render() {
    return (
      <div>
        <form className="search-bar" onSubmit={this.handleSubmit}>
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

export default SearchBar;
