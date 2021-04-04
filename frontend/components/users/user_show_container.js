import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchArtist, updateArtist } from "../../actions/artist_show_actions";

const mSTP = (state, ownProps) => {
  return {
    artist: state.entities.artists[ownProps.match.params.id],
    session: state.session,
    errors: state.errors,
  };
};
const mDTP = (dispatch) => {
  return {
    fetchArtist: (id) => dispatch(fetchArtist(id)),
    updateArtist: (id) => dispatch(updateArtist(id)),
  };
};

export default connect(mSTP, mDTP)(UserShow);
