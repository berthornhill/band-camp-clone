import * as albumAPI from "../util/album_util";

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_NEW_TRACK = "RECEIVE_NEW_TRACK";
export const REMOVE_DELETED = "REMOVE_DELETED";
export const REMOVE_TRACK = "REMOVE_TRACK";

const receiveAlbums = ({ albums }) => {
  // debugger;
  return {
    type: RECEIVE_ALBUMS,
    albums,
  };
};

const receiveAlbum = ({ album, artist }) => {
  // debugger;
  return {
    type: RECEIVE_ALBUM,
    album,
    artist,
  };
};

const receiveTracks = (tracks) => {
  return {
    type: RECEIVE_TRACKS,
    tracks,
  };
};

const receiveNewTrack = ({ track, album }) => {
  return {
    type: RECEIVE_NEW_TRACK,
    track,
    album,
  };
};

const removeAlbum = ({ artist, tracks, album }) => {
  return {
    type: REMOVE_DELETED,
    artist,
    tracks,
    album,
  };
};

const removeTrack = ({ track, album }) => {
  return {
    type: REMOVE_TRACK,
    album,
    track,
  };
};

export const fetchAlbum = (id) => (dispatch) =>
  albumAPI.fetchAlbum(id).then((album) => dispatch(receiveAlbum(album)));

export const fetchAlbums = (id) => (dispatch) => {
  albumAPI.fetchAlbums(id).then((albums) => dispatch(receiveAlbums(albums)));
};

export const createAlbum = (id, formData) => (dispatch) => {
  return albumAPI
    .createAlbum(id, formData)
    .then((album) => dispatch(receiveAlbum(album)));
};

export const fetchTracks = (id) => (dispatch) =>
  albumAPI.fetchTracks(id).then((tracks) => dispatch(receiveTracks(tracks)));

export const createTracks = (albumId, formData) => (dispatch) =>
  albumAPI
    .createTracks(albumId, formData)
    .then((tracks) => dispatch(receiveNewTrack(tracks)));

export const deleteAlbum = (id) => (dispatch) =>
  albumAPI.deleteAlbum(id).then((payload) => dispatch(removeAlbum(payload)));

export const deleteTrack = (id) => (dispatch) =>
  albumAPI.deleteTrack(id).then((payload) => dispatch(removeTrack(payload)));
