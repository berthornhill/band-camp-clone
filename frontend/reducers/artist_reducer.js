import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
  RECEIVE_SEARCH,
} from "../actions/artist_show_actions";

import { RECEIVE_ALBUM, REMOVE_DELETED } from "../actions/album_actions";

import {
  RECEIVE_CURRENT_USER,
  REMOVE_ERRORS,
} from "../actions/session_actions";
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
    case REMOVE_DELETED:
      debugger;
      const tempState = { ...state };
      tempState[action.artist.id].albums = action.artist.albums;
      return tempState;

    default:
      return state;
  }
};

export default ArtistReducer;
