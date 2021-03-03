import {
  RECEIVE_ARTIST,
  RECEIVE_ARTISTS,
} from "../actions/artist_show_actions";

const SearchReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTISTS:
      return action.search.result;
    default:
      return state;
  }
};

export default SearchReducer;
