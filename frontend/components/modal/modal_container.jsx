import { openModal, removeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import Modal from "./modal_component";

const mSTP = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mDTP = (dispatch) => {
  return {
    openModal: (component) => dispatch(openModal(component)),
    removeModal: () => dispatch(removeModal()),
  };
};

export default connect(mSTP, mDTP)(Modal);
