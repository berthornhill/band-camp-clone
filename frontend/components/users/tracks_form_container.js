import { connect } from "react-redux";
import TracksForm from "./tracks_form";
import { createTracks } from "../../actions/album_actions";

const mSTP = (state, ownProps) => {
  debugger;
  return {
    albumsArray: state.entities.artist[ownProps.match.params.id].albums.sort(),
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    errors: state.errors,
  };
};

const mDTP = (dispatch) => {
  return {
    createTracks: (albumId, formData) =>
      dispatch(createTracks(albumId, formData)),
  };
};

export default connect(mSTP, mDTP)(TracksForm);
