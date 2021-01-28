import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
} from "../actions/artist_show_actions";

const ArtistReducer = (state = {}, action) => {
  // debugger;
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    case RECEIVE_ARTIST:
      // debugger;
      return {
        ...state,
        [action.artistPackage.artist.id]: action.artistPackage.artist,
      };
    case RECEIVE_ARTISTS:
      return Object.assign({}, action.artists);
    default:
      return state;
  }
};

export default ArtistReducer;
