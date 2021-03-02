import { RECEIVE_ARTIST } from "../actions/artist_show_actions";
import { RECEIVE_TRACKS, RECEIVE_NEW_TRACK } from "../actions/album_actions";

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger;
  switch (action.type) {
    case RECEIVE_ARTIST:
      const newState = Object.assign({}, state, action.artistPackage.tracks);
      // debugger;
      return newState;
    case RECEIVE_NEW_TRACK:
      // debugger;
      return { ...state, [action.tracks.id]: action.track };
    default:
      return state;
  }
};

export default TracksReducer;
