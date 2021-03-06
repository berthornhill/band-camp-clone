import { RECEIVE_SEARCH } from "../actions/artist_show_actions";

const _nullSearch = {
  artists: [],
  albums: [],
  tracks: [],
};

const SearchReducer = (state = _nullSearch, action) => {
  Object.freeze(state);
  debugger;
  switch (action.type) {
    case RECEIVE_SEARCH:
      debugger;
      return action.search;
    default:
      return state;
  }
};

export default SearchReducer;
