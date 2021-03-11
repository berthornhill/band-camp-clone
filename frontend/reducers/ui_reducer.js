import { combineReducers } from "redux";
import ModalReducer from "./modal_reducer";
import AudioPlayerReducer from "../reducers/audio_player_reducer";

const UIReducer = combineReducers({
  modal: ModalReducer, // sig on
  playing: AudioPlayerReducer,
});

export default UIReducer;
