import { connect } from "react-redux";
import { fetchArtist } from "../../actions/artist_show_actions";
import ArtistShow from "./artist_show_component";

const mSTP = (state, ownProps) => {
  return {
    artist: state.entities.artists[ownProps.match.params.id],
  };
};

const mDTP = (dispatch) => {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id)),
  };
};

export default connect(mSTP, mDTP)(ArtistShow);
