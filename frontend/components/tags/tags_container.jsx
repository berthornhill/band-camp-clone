import { connect } from "react-redux";
import { fetchTagged } from "../../actions/tag_actions";

const mSTP = (state, ownProps) => {
  return {
    taggedArtists: this.state.tags.artists,
    taggedAlbums: this.state.tags.albums,
    artists: this.state.artists,
    albums: this.state.albums,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchTagged: (tag) => dispatch(fetchTagged(tag)),
  };
};
