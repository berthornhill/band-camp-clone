import { RECEIVE_SEARCH } from "../actions/artist_show_actions";

const SearchReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH:
      return action.search.result;
    default:
      return state;
  }
};

export default SearchReducer;
