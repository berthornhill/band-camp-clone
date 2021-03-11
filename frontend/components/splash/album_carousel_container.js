import { connect } from "react-redux";
import AlbumCarousel from "./album_carousel";
import { fetchArtists } from "../../actions/artist_show_actions";

const mSTP = (state) => {
  // debugger;
  return {
    artists: Object.values(state.entities.artists),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchArtists: () => dispatch(fetchArtists()),
  };
};

export default connect(mSTP, mDTP)(AlbumCarousel);
