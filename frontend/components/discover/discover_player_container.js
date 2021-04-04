import { connect } from "react-redux";
import DiscoverPlayer from "./discover_player";
// import { fetchTaggedTracks } from "../../actions/tag_actions";
import { playTrack } from "../../actions/player_actions";

const mSTP = (state, ownProps) => {
  return {
    artists: state.entities.artists,
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    tags: state.entities.tags,
  };
};

const mDTP = (dispatch) => {
  return {
    playTrack: (track) => dispatch(playTrack(track)),
  };
};

export default connect(mSTP, mDTP)(DiscoverPlayer);
