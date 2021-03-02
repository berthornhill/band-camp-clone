import { RECEIVE_ARTIST } from "../actions/artist_show_actions";
import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
  RECEIVE_NEW_TRACK,
} from "../actions/album_actions";

const AlbumsReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger;
  switch (action.type) {
    case RECEIVE_ARTIST:
      // const als = { ...action.artistPackage.albums };
      // debugger;
      const newState = Object.assign({}, state, ...action.artistPackage.albums);
      // debugger;
      return newState;
    case RECEIVE_ALBUM:
      // debugger;
      return Object.assign({}, state, { [action.album.id]: action.album });
    case RECEIVE_NEW_TRACK:
      debugger;
      return { ...state, [action.album.id]: { tracks: action.album.tracks } };
    default:
      return state;
  }
};

export default AlbumsReducer;

// { …state, [id]: album }
