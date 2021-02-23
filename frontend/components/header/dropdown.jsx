import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import user_show_container from "../users/user_show_container";

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };

    this.openCloseMenu = this.openCloseMenu.bind(this);
  }

  openCloseMenu() {
    debugger;
    const toggle = !this.state.display;
    this.setState({ display: toggle });
  }

  render() {
    const { currentUser, logout, user } = this.props;

    return (
      <div>
        <button
          className="dropdown"
          // onFocus={this.openCloseMenu}
          // onBlur={this.openCloseMenu}
          onClick={this.openCloseMenu}
        >
          <span className="dot-big"></span>
          {this.state.display ? (
            <MenuItems currentUser={currentUser} logout={logout} user={user} />
          ) : null}
        </button>
      </div>
    );
  }
}

// Menu Functional component
const MenuItems = ({ currentUser, logout, user }) => {
  debugger;
  return (
    <div>
      <ul>
        <Link to={`/artist/${currentUser}`}>{user.artist}: view site</Link>
        <Link to={`/users/${currentUser}`}>edit profile</Link>
        <li onClick={logout}>log out</li>
      </ul>
    </div>
  );
};

export default UserDropdown;

// const mSTP = (state) => {
//     return {
//         cu
//     }
// }
