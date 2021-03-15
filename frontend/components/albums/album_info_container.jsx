import { connect } from "react-redux";
import AlbumInfo from "./album_info";
// import { fetchAlbum } from "../../actions/album_actions.js";
import { fetchAlbum } from "../../actions/album_actions";
import { playTrack } from "../../actions/player_actions";

const mSTP = (state, ownProps) => {
  return {
    album: state.entities.albums[ownProps.match.params.albumId],
    tracks: state.entities.tracks,
    artist: state.entities.artists[ownProps.match.params.id],
  };
};

const mDTP = (dispatch) => {
  return {
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    playTrack: (track) => dispatch(playTrack(track)),
  };
};

export default connect(mSTP, mDTP)(AlbumInfo);
