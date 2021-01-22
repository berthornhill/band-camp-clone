import { connect } from "react-redux";
import NavBar from "./navbar_component";
import { logout } from "../../actions/session_actions";

const mSTP = (state) => {
  return {
    currentUser: state.session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default connect(mSTP, mDTP)(NavBar);
