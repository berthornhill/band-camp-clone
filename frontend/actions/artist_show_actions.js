import * as artistAPI from "../util/artist_show_util";

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

const receiveArtist = (artistPackage) => {
  return {
    type: RECEIVE_ARTIST,
    artistPackage,
  };
};

const receiveArtists = (artists) => {
  return {
    type: RECEIVE_ARTISTS,
    artists,
  };
};

const receiveAlbums = ({ albums }) => {
  return {
    type: RECEIVE_ALBUMS,
    albums,
  };
};

const receiveTracks = (tracks) => {
  return {
    type: RECEIVE_TRACKS,
    tracks,
  };
};

const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

const receiveSearch = ({ artists, albums, tracks, search }) => {
  return {
    type: RECEIVE_SEARCH,
    artists,
    albums,
    tracks,
    search,
  };
};

export const fetchArtist = (id) => (dispatch) =>
  artistAPI.artistShow(id).then((artist) => dispatch(receiveArtist(artist)));

export const fetchArtists = () => (dispatch) =>
  artistAPI.fetchArtists().then((artists) => dispatch(receiveArtists(artists)));

export const updateArtist = (id, formData) => (dispatch) =>
  artistAPI.updateArtist(id, formData).then(
    (artist) => dispatch(receiveArtist(artist)),
    (errors) => dispatch(receiveErrors(errors.respondJSON))
  );

export const searchArtist = (search) => (dispatch) =>
  artistAPI
    .searchArtist(search)
    .then((results) => dispatch(receiveSearch(results)));
