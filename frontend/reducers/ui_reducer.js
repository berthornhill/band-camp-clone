import { combineReducers } from "redux";
import ModalReducer from "./modal_reducer";

const UIReducer = combineReducers({
  modal: ModalReducer, // sig on
});

export default UIReducer;
