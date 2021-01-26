import React from "react";
import { connect } from "react-redux";

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };

    this.openCloseMenu = this.openCloseMenu.bind(this);
  }

  openCloseMenu() {
    // debugger;
    const toggle = !this.state.display;
    this.setState({ display: toggle });
  }

  render() {
    // debugger;
    const { currentUser, logout } = this.props;
    return (
      <div>
        <button
          className="dropdown"
          onFocus={this.openCloseMenu}
          onBlur={this.openCloseMenu}
        >
          <span className="dot-big"></span>
          {this.state.display ? (
            <MenuItems currentUser={currentUser} logout={logout} />
          ) : null}
        </button>
      </div>
    );
  }
}

const MenuItems = ({ currentUser, logout }) => {
  return (
    <div>
      <ul>
        <li onClick={logout}>Log Out</li>
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
