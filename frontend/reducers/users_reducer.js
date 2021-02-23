import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const UsersReducer = (state = {}, action) => {
  debugger;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger;
      return Object.assign({}, action.user);
    default:
      return state;
  }
};

export default UsersReducer;
