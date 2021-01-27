import * as artistAPI from "../util/artist_show_util";

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";

const receiveArtist = (artist) => {
  // debugger;
  return {
    type: RECEIVE_ARTIST,
    artist,
  };
};

const receiveArtists = (artists) => {
  return {
    type: RECEIVE_ARTISTS,
    artists,
  };
};

export const artistShow = (id) => (dispatch) =>
  artistAPI.artistShow(id).then((artist) => dispatch(receiveArtist(artist)));

export const fetchArtists = () => (dispatch) =>
  artistAPI.fetchArtists().then((artists) => dispatch(receiveArtists(artists)));
