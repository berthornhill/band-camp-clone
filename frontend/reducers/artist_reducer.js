import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
} from "../actions/artist_show_actions";

import { RECEIVE_ALBUM } from "../actions/album_actions";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

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

    case RECEIVE_ALBUM:
      debugger;
      return Object.assign({}, state, {
        [action.artist.id.albums]: action.artist.id.albums,
      });
    case RECEIVE_CURRENT_USER:
    // debugger;
    // return { ...state, action };
    default:
      return state;
  }
};

export default ArtistReducer;
