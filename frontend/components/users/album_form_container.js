import { connect } from "react-redux";
import AlbumForm from "./album_form";
import { createAlbum } from "../../actions/album_actions";

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    artist: state.entities.artists[ownProps.match.params.id],
    errors: state.errors,
  };
};

const mDTP = (dispatch) => {
  return {
    createAlbum: (id, formData) => dispatch(createAlbum(id, formData)),
  };
};

export default connect(mSTP, mDTP)(AlbumForm);
