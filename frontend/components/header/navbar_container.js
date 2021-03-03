import { connect } from "react-redux";
import NavBar from "./navbar_component";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import { searchArtist } from "../../actions/artist_show_actions";

const mSTP = (state) => {
  return {
    currentUser: state.session.id,
    user: state.entities.users,
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal("signup")),
    searchArtist: (searchReq) => dispatch(searchArtist(searchReq)),
  };
};
export default connect(mSTP, mDTP)(NavBar);
