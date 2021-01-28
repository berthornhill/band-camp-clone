import { RECEIVE_TRACKS, RECEIVE_ARTIST } from "../actions/artist_show_actions";

const TracksReducer = (state = {}, action) => {
  Object.freeze(state);
  //   debugger;
  switch (action.type) {
    case RECEIVE_ARTIST:
      const newState = Object.assign({}, state, action.artistPackage.tracks);
      // debugger;
      return newState;
    // case RECEIVE_TRACKS:
    //   // debugger;
    //   return { ...state, [action.tracks.id]: action.tracks };
    default:
      return state;
  }
};

export default TracksReducer;
