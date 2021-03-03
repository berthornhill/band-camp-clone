import { connect } from "react-redux";
import SearchResults from "./search_results";

const mSTP = (state) => {
  debugger;
  return {
    search: state.entities.search,
    artists: state.entities.artist,
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(SearchResults);
