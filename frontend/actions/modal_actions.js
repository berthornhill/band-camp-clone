export const OPEN_MODAL = "OPEN_MODAL";
export const REMOVE_MODAL = "REMOVE_MODAL";

export const openModal = (component) => (dispatch) => {
  return dispatch({ type: OPEN_MODAL, component });
};

export const removeModal = () => (dispatch) => {
  return dispatch({ type: REMOVE_MODAL });
};
