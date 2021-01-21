import { login } from "../../actions/session_actions";
import { connect } from "react-redux";
import LoginForm from "./login_form_component";

const mSTP = (state) => {
  return {
    user: {
      username: "",
      password: "",
    },
    formType: "login",
  };
};

function mDTP(dispatch) {
  return {
    action: (user) => dispatch(login(user)),
  };
}

export default connect(mSTP, mDTP)(LoginForm);
