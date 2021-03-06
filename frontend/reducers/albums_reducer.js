import { RECEIVE_ARTIST, RECEIVE_SEARCH } from "../actions/artist_show_actions";
import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
  RECEIVE_NEW_TRACK,
} from "../actions/album_actions";

const AlbumsReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    case RECEIVE_ARTIST:
      const newState = Object.assign({}, state, ...action.artistPackage.albums);
      return newState;
    case RECEIVE_ALBUM:
      return Object.assign({}, state, { [action.album.id]: action.album });
    case RECEIVE_NEW_TRACK:
      // debugger;
      const addTracksState = { ...state };
      addTracksState[action.album.id].tracks = action.album.tracks;
      // debugger;
      return addTracksState;
    case RECEIVE_SEARCH:
      // debugger;
      return { ...state, ...action.albums };
    default:
      return state;
  }
};

export default AlbumsReducer;

// { …state, [id]: album }
