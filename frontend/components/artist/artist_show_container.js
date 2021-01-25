import { connect } from "react-redux";
import { artistShow } from "../../actions/artist_show_actions";
import ArtistShow from "./artist_show_component";

const mSTP = (state, ownProps) => {
  return {
    artist: state.entities.artist,
    // id: ownProps.match.params.id,
  };
};

const mDTP = (dispatch) => {
  debugger;
  return {
    artistShow: (id) => dispatch(artistShow(id)),
  };
};

export default connect(mSTP, mDTP)(ArtistShow);
