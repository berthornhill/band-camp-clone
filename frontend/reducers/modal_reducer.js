import { OPEN_MODAL, REMOVE_MODAL } from "../actions/modal_actions";

const ModalReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return action.component;
    case REMOVE_MODAL:
      return null;
    default:
      return state;
  }
};

export default ModalReducer;
