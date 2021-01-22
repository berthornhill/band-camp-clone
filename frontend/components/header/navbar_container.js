import { connect } from "react-redux";
import NavBar from "./navbar_component";
import { logout } from "../../actions/session_actions";

// debugger;
const mSTP = (state) => {
  debugger;
  return {
    currentUser: state.session.id,
  };
};

const mDTP = (dispatch) => {
  debugger;
  return {
    logout: () => dispatch(logout()),
  };
};
export default connect(mSTP, mDTP)(NavBar);
