import { connect } from "react-redux";
import Carousel from "./carousel";

const mSTP = (state, ownProps) => {
  return {
    keysArray: ownProps.keysArray,
    cardsPerPage: ownProps.cardsPerPage,
    content: ownProps.content,
  };
};
