import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
  RECEIVE_SEARCH,
} from "../actions/artist_show_actions";

import { RECEIVE_ALBUM } from "../actions/album_actions";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_TAGGED } from "../actions/tag_actions";

const ArtistReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTIST:
      return {
        ...state,
        [action.artistPackage.artist.id]: action.artistPackage.artist,
      };
    case RECEIVE_ARTISTS:
      return Object.assign({}, state, action.artists);

    case RECEIVE_ALBUM:
      return Object.assign({}, state, {
        [action.artist.id]: action.artist,
      });
    case RECEIVE_SEARCH:
      // debugger;
      return { ...state, ...action.artists };
    // return { ...state, action };
    case RECEIVE_TAGGED:
      return { ...state, ...action.payload.artists };
    default:
      return state;
  }
};

export default ArtistReducer;
