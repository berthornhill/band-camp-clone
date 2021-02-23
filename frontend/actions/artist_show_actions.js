import * as artistAPI from "../util/artist_show_util";

export const RECEIVE_ARTIST = "RECEIVE_ARTIST";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

const receiveArtist = (artistPackage) => {
  // debugger;
  return {
    type: RECEIVE_ARTIST,
    artistPackage,
  };
};

const receiveArtists = (artists) => {
  // debugger;
  return {
    type: RECEIVE_ARTISTS,
    artists,
  };
};

const receiveAlbums = ({ albums }) => {
  // debugger;
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
  // debugger;
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

export const fetchArtist = (id) => (dispatch) =>
  artistAPI.artistShow(id).then((artist) => dispatch(receiveArtist(artist)));

export const fetchArtists = () => (dispatch) =>
  artistAPI.fetchArtists().then((artists) => dispatch(receiveArtists(artists)));

export const fetchAlbum = (id) => (dispatch) =>
  artistAPI.fetchAlbum(id).then((album) => dispatch(receiveAlbum(album)));

// export const fetchAlbums = (artistId) => (dispatch) =>
//   artistAPI
//     .fetchAlbums(artistId)
//     .then((albums) => dispatch(receiveAlbums(albums)));

export const fetchTracks = (id) => (dispatch) =>
  artistAPI.fetchTracks(id).then((tracks) => dispatch(receiveTracks(tracks)));

export const fetchAlbums = (id) => (dispatch) => {
  artistAPI.fetchAlbums(id).then((albums) => dispatch(receiveAlbums(albums)));
};

export const updateArtist = (id) => (dispatch) =>
  artistAPI.updateArtist(id).then(
    (artist) => dispatch(receiveArtist(artist)),
    (errors) => dispatch(receiveErrors(errors.respondJSON))
  );
