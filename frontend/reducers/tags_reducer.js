import { RECEIVE_TAGGED } from "../actions/tag_actions";

const TagsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TAGGED:
      return { ...action.payload.tags };
    default:
      return state;
  }
};

export default TagsReducer;
