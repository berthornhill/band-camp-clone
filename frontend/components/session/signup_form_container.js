import { signup } from "../../actions/session_actions";
import { connect } from "react-redux";
import SignupForm from "./signup_form_component";
import { removeModal } from "../../actions/modal_actions";

const mSTP = (state) => {
  return {
    user: {
      username: "",
      password: "",
      artist: "",
      email: "",
    },
    formType: "signup",
  };
};

function mDTP(dispatch) {
  return {
    action: (user) => dispatch(signup(user)),
    removeodal: () => dispatch(removeModal()),
  };
}

export default connect(mSTP, mDTP)(SignupForm);
