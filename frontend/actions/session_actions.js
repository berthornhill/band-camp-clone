import { connect } from "react-redux";
import * as SessionUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const recieveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const signup = (user) => (dispatch) => {
  return SessionUtil.signup(user).then(
    (user) => dispatch(recieveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const login = (user) => (dispatch) => {
  return SessionUtil.login(user).then(
    (user) => dispatch(recieveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logout = () => (dispatch) => {
  return SessionUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    (errors) => dispatch(receiveErrors(errors.respondJSON))
  );
};

export const clearErrors = () => (dispatch) =>
  dispatch({ type: REMOVE_ERRORS });
