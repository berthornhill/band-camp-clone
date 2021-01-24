import { clearErrors, login } from "../../actions/session_actions";
import { connect } from "react-redux";
import LoginForm from "./login_form_component";
import { removeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
  debugger;
  let user;
  ownProps.location.type
    ? (user = { username: "demo", password: "testpassword" })
    : (user = { username: "", password: "" });

  return {
    user,
    formType: "login",
    session: state.session,
    errors: state.errors,
  };
};

function mDTP(dispatch) {
  return {
    action: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    removeModal: () => dispatch(removeModal()),
  };
}

export default connect(mSTP, mDTP)(LoginForm);
