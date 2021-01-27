import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
} from "../actions/artist_show_actions";

const ArtistReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    case RECEIVE_ARTIST:
      return Object.assign({}, action.artist.artist);
    case RECEIVE_ARTISTS:
      return Object.assign({}, action.artists);
    default:
      return state;
  }
};

export default ArtistReducer;
