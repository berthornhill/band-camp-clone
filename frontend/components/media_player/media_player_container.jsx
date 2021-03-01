import { connect } from "react-redux";
import MediaPlayer from "./media_player";
// import { fetchAlbum } from "../../actions/album_actions.js";
import { fetchAlbum } from "../../actions/album_actions";

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    album: state.entities.albums[ownProps.match.params.albumId],
    tracks: state.entities.tracks,
    artist: state.entities.artist[ownProps.match.params.id],
  };
};

const mDTP = (dispatch) => {
  return {
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
  };
};

export default connect(mSTP, mDTP)(MediaPlayer);
