import { signup } from "../../actions/session_actions";
import { connect } from "react-redux";
import SignupForm from "./login_form_component";

const mSTP = (state) => {
  return {
    user: {
      username: "",
      password: "",
      artist: "",
    },
    formType: "signup",
  };
};

function mDTP(dispatch) {
  return {
    action: (user) => dispatch(signup(user)),
  };
}

export default connect(mSTP, mDTP)(SignupForm);
