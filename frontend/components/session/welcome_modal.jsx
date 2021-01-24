import navbar_container from "../header/navbar_container";
import { connect } from "react-redux";
import { removeModal } from "../../actions/modal_actions";

import React from "react";
import { Link } from "react-router-dom";

const WelcomeModal = ({ removeModal }) => {
  return (
    <div className="modal-container">
      <div className="welcome">
        <div className="modal-header">
          <div className="message">
            <h2>Sign up for a Bandlamp account</h2>
          </div>
          <div className="switch">
            <img src={window.lightSwitch} onClick={() => removeModal()} />
          </div>
        </div>
        <ul className="accounts">
          <li className="artist">
            <div className="infolink">
              <div className="description">
                <p>
                  Sell directly to your fans with total control over your music
                  and pricing. Easy access to your customers’ data, real-time
                  stats, music chart reporting, and more. learn more
                </p>
              </div>
              <Link to="/users/signup">Sign up as an Artist</Link>
            </div>
            <div className="icon">
              <img src={window.desklamp} />
            </div>
          </li>
          <li className="demo-user">
            <div className="icon">
              <img src={window.lantern} />
            </div>
            <div className="infolink">
              <div className="description">
                Don't wanna make an account of your own? No problem. Use this
                provided Demo account and have a good time! Try out all our
                <span className="grad-text"> illuminating</span> features
                without the commitment!
              </div>
              <Link
                to={{
                  pathname: "/users/login",
                  type: "demo",
                }}
              >
                Sign up as Demo User
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

// debugger;
const mSTP = () => {
  return {};
};

const mDTP = (dispatch) => {
  return {
    removeModal: () => dispatch(removeModal()),
  };
};
// debugger;
export default connect(mSTP, mDTP)(WelcomeModal);
