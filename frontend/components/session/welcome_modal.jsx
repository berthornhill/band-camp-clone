import navbar_container from "../header/navbar_container";
import { connect } from "react-redux";
import { removeModal } from "../../actions/modal_actions";

import React from "react";
import { Link } from "react-router-dom";

const WelcomeModal = () => {
  return (
    <div className="modal-container">
      <div className="welcome">
        <div className="message">
          <h2>Sign up for a Bandlamp account</h2>
          <img src={window.lightSwitch} />
        </div>
        <ul className="accounts">
          <li className="artist">
            <div className="icon">
              <img src={window.desklamp} />
            </div>
            <div className="description">
              <p>
                Sell directly to your fans with total control over your music
                and pricing. Easy access to your customers’ data, real-time
                stats, music chart reporting, and more. learn more
              </p>
            </div>
            <Link to="/users/signup">
              <button>Sign up as an Artist</button>
            </Link>
          </li>
          <li className="demo-user">
            <div className="icon">
              <img src={window.desklamp} />
            </div>
            <div className="description">
              Don't wanna make an account of your own? No problem. Use this
              provided Demo account and have a good time! Try out all our
              illuminating features!
            </div>
            <Link
              to={{
                pathname: "/users/login",
                type: "demo",
              }}
            >
              <button>Sign up as Demo User</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

debugger;
const mSTP = () => {
  return {};
};

const mDTP = (dispatch) => {
  return {
    removeModal: () => dispatch(removeModal()),
  };
};
debugger;
export default connect(mSTP, mDTP)(WelcomeModal);
