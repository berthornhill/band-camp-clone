import { connect } from "react-redux";
import SearchResults from "./search_results";

const mSTP = (state) => {
  return {
    results: state.entities.results,
    artists: state.entities.artists,
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(SearchResults);
