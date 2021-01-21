import * as SessionUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
// export const LOGIN_CURRENT_USER = "LOGIN_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const recieveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const signup = (user) => (dispatch) => {
  return SessionUtil.signup(user).then(
    (user) => dispatch(recieveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors))
  );
};

export const login = (user) => (dispatch) => {
  return SessionUtil.login(user).then(
    (user) => dispatch(recieveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors))
  );
};

export const logout = () => (dispatch) => {
  return SessionUtil.logout().then(
    () => dispatch(logoutCurrentUser()),
    (errors) => dispatch(receiveErrors(errors))
  );
};
