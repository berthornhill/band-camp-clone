import { connect } from "react-redux";
import Discover from "./discover";
import { fetchTaggedTracks } from "../../actions/tag_actions";

const mSTP = (state) => {
  // debugger;
  return {
    artists: state.entities.artist,
    albums: state.entities.albums,
    tracks: state.entities.tracks,
    tags: state.entities.tags,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchTaggedTracks: (tag) => dispatch(fetchTaggedTracks(tag)),
  };
};

export default connect(mSTP, mDTP)(Discover);
