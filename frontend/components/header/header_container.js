import { connect } from "react-dom";
import Header from "./header_component";

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.id,
  };
};

export default connect(mSTP)(Header);
