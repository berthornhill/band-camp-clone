import { connect } from "react-redux";
import { fetchTagged } from "../../actions/tag_actions";
import Tags from "./tags";

const mSTP = (state, ownProps) => {
  return {
    tags: state.entities.tags,
    artists: state.entities.artists,
    albums: state.entities.albums,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchTagged: (tag) => dispatch(fetchTagged(tag)),
  };
};

export default connect(mSTP, mDTP)(Tags);
