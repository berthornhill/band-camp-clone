import { PLAY_TRACK } from "../actions/player_actions";

const AudioPlayerReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case PLAY_TRACK:
      return { track: action.track };
    default:
      return state;
  }
};

export default AudioPlayerReducer;
