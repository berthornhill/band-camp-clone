import { RECEIVE_ARTIST, RECEIVE_SEARCH } from "../actions/artist_show_actions";
import { RECEIVE_TAGGED } from "../actions/tag_actions";
import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
  RECEIVE_NEW_TRACK,
  REMOVE_DELETED,
  REMOVE_TRACK,
} from "../actions/album_actions";

const AlbumsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTIST:
      const newState = Object.assign({}, state, ...action.artistPackage.albums);
      return newState;
    case RECEIVE_ALBUM:
      return Object.assign({}, state, { [action.album.id]: action.album });
    case RECEIVE_NEW_TRACK:
      const addTracksState = { ...state };
      addTracksState[action.album.id].tracks = action.album.tracks;

      return addTracksState;
    case RECEIVE_SEARCH:
      return { ...state, ...action.albums };
    case RECEIVE_TAGGED:
      return { ...state, ...action.payload.albums };

    case REMOVE_DELETED:
      debugger;
      const tempState = { ...state };
      delete tempState[action.album.id];
      debugger;
      return tempState;
    case REMOVE_TRACK:
      const updateState = { ...state };
      updateState[action.album.id].tracks = action.album.tracks;
      return updateState;
    default:
      return state;
  }
};

export default AlbumsReducer;

// { …state, [id]: album }
