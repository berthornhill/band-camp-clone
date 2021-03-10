import { connect } from "react-redux";
import DiscoverPlayer from "./discover_player";
// import { fetchTaggedTracks } from "../../actions/tag_actions";

const mSTP = (state) => {
  //   debugger;
  return {
    artists: state.entities.artist,
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    tags: state.entities.tags,
  };
};

const mDTP = (dispatch) => {
  return {
    // fetchTaggedTracks: (tag) => dispatch(fetchTaggedTracks(tag)),
  };
};

export default connect(mSTP, mDTP)(DiscoverPlayer);
