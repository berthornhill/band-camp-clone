import { RECEIVE_ERRORS, REMOVE_ERRORS } from "../actions/session_actions";

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  debugger;
  switch (action.type) {
    case RECEIVE_ERRORS:
      let errors = Object.values(action.errors);
      return errors;
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
