import { RECEIVE_ARTIST, RECEIVE_SEARCH } from "../actions/artist_show_actions";
import {
  RECEIVE_TRACKS,
  RECEIVE_NEW_TRACK,
  REMOVE_DELETED,
  REMOVE_TRACK,
} from "../actions/album_actions";
import { RECEIVE_TAGGED } from "../actions/tag_actions";

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    case RECEIVE_ARTIST:
      const newState = Object.assign({}, state, action.artistPackage.tracks);
      // debugger;
      return newState;
    case RECEIVE_NEW_TRACK:
      // debugger;
      return Object.assign({}, state, action.track);
    case RECEIVE_SEARCH:
      // debugger;
      return { ...state, ...action.tracks };
    case RECEIVE_TAGGED:
      return { ...state, ...action.payload.tracks };

    case REMOVE_DELETED:
      const tempState = { ...state };
      action.tracks.forEach((track) => delete tempState[track]);
      debugger;
      return tempState;

    case REMOVE_TRACK:
      const newTrackState = { ...state };
      delete newTrackState[action.track];
      return newTrackState;
    default:
      return state;
  }
};

export default TracksReducer;

const removeFromArray = (array) => {};
