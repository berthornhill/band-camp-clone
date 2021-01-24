import { signup, clearErrors } from "../../actions/session_actions";
import { connect } from "react-redux";
import SignupForm from "./signup_form_component";
import { removeModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    user: {
      username: "",
      password: "",
      artist: "",
      email: "",
    },
    formType: "signup",
    errors: state.errors,
  };
};

function mDTP(dispatch) {
  return {
    action: (user) => dispatch(signup(user)),
    removeModal: () => dispatch(removeModal()),
    clearErrors: () => dispatch(clearErrors()),
  };
}

export default connect(mSTP, mDTP)(SignupForm);
