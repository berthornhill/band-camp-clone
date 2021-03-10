import * as TagsUtil from "../util/tags_util";

export const RECEIVE_TAGGED = "RECEIVE_TAGGED";

const receiveTagged = (payload) => {
  return {
    type: RECEIVE_TAGGED,
    payload,
  };
};

export const fetchTaggedTracks = (tag) => (dispatch) =>
  TagsUtil.fetchTaggedTracks(tag).then((payload) =>
    dispatch(receiveTagged(payload))
  );
export const fetchTagged = (tag) => (dispatch) =>
  TagsUtil.fetchTagged(tag).then((payload) => dispatch(receiveTagged(payload)));
