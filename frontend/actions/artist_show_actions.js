import * as artistAPI from "../util/artist_show_util";

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

const receiveArtist = (artist) => {
  // debugger;
  return {
    type: RECEIVE_ARTIST,
    artist,
  };
};

export const artistShow = (id) => (dispatch) =>
  artistAPI.artistShow(id).then((artist) => dispatch(receiveArtist(artist)));
