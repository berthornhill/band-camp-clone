import { connect } from "react-redux";
import TracksForm from "./tracks_form";
import {
  createTracks,
  deleteAlbum,
  deleteTrack,
} from "../../actions/album_actions";

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    albumsArray: state.entities.artists[ownProps.match.params.id].albums.sort(),
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    errors: state.errors,
  };
};

const mDTP = (dispatch) => {
  return {
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    deleteAlbum: (id) => dispatch(deleteAlbum(id)),
    createTracks: (albumId, formData) =>
      dispatch(createTracks(albumId, formData)),
  };
};

export default connect(mSTP, mDTP)(TracksForm);
