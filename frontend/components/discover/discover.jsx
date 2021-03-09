import React from "react";
import DiscoverPlayer from "./discover_player";

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="discover-outer">
        <div className="discover-header">
          <h2>Discover</h2>
          <span>browse by tags</span>
        </div>

        <div className="colored-tags-outer">
          <div className="top">TAGS of all kinds</div>
          <div className="middle">other new, best, rec'd </div>
          <div className="bottom">other stuff </div>
        </div>
        <DiscoverPlayer />
      </div>
    );
  }
}

export default Discover;
