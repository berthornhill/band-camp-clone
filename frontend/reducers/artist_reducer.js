import { RECEIVE_ARTIST } from "../actions/artist_show_actions";

const ArtistReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger;
  switch (action.type) {
    case RECEIVE_ARTIST:
      return action.artist;
    default:
      return state;
  }
};

export default ArtistReducer;
