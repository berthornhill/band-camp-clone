export const PLAY_TRACK = "PLAY_TRACK";

export const playTrack = (track) => (dispatch) =>
  dispatch({
    type: PLAY_TRACK,
    track,
  });
