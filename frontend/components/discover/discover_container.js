import { connect } from "react-redux";
import Discover from "./discover";
import { fetchTaggedTracks } from "../../actions/tag_actions";

const mSTP = (state) => {
  return {
    artists: state.entities.artist,
    albums: state.entities.albums,
    tracks: state.entities.tracks,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchTaggedTracks: (tag) => dispatch(fetchTaggedTracks(tag)),
  };
};

export default connect(mSTP, mDTP)(Discover);
