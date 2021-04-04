import AlbumShow from "./album_show";
import { fetchAlbum } from "../../actions/album_actions";
import { connect } from "react-redux";

const mSTP = (state, ownProps) => {
  return {
    album: state.entities.albums[ownProps.match.params.albumId],
    tracks: state.entities.tracks,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  };
};

export default connect(mSTP, mDTP)(AlbumShow);
