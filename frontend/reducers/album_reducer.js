import { RECEIVE_ARTIST } from "../actions/artist_show_actions";

const AlbumReducer = (state = {}, action) => {
  Object.freeze(state);
  //   debugger;
  switch (action.type) {
    case RECEIVE_ARTIST:
      return Object.assign({}, action.artist.albums);
    default:
      return state;
  }
};

export default AlbumReducer;
