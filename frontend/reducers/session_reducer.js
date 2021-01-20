import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.user.id });
    case LOGOUT_CURRENT_USER:
      return Object.assing({});
    default:
      return state;
  }
};

export default SessionReducer;
