import { connect } from "react-redux";
import Carousel from "./artist_carousel";

const mSTP = (state, ownProps) => {
  return {
    keysArray: ownProps.keysArray,
    cardsPerPage: ownProps.cardsPerPage,
    content: ownProps.content,
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(Carousel);
