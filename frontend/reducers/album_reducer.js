import {
  RECEIVE_ALBUM,
  RECEIVE_ALBUMS,
  RECEIVE_ARTIST,
} from "../actions/artist_show_actions";

const AlbumReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger;
  switch (action.type) {
    case RECEIVE_ARTIST:
      // const als = { ...action.artistPackage.albums };
      // debugger;
      const newState = Object.assign({}, state, ...action.artistPackage.albums);
      // debugger;
      return newState;
    // case RECEIVE_ALBUMS:
    //   // return Object.assign({}, state, action.artist.albums);
    //   debugger;
    //   return Object.assign({}, state, action.albums);
    // case RECEIVE_ALBUM:
    // debugger;
    // return Object.assign({}, { [action.tracks.albumId]: action.tracks });
    default:
      return state;
  }
};

export default AlbumReducer;

// { …state, [id]: album }
