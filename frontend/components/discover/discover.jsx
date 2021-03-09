import React from "react";
import DiscoverPlayer from "./discover_player";

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="discover-outer">
        <div className="header-inner">
          <div className="discover-header">
            <h2>Discover</h2>
            <span>browse by tags</span>
          </div>
        </div>

        <div className="top tags-outer">
          <div className="top tags-inner">
            <div>Tags</div>
            <div>electronic</div>
            <div>rock</div>
            <div>experimental</div>
            <div>alternative</div>
            <div>metal</div>
            <div>hip-hop/rap</div>
            <div>punk</div>
            <div>ambient</div>
            <div>soundtrack</div>
            <div>jazz</div>
            <div>classical</div>
          </div>
        </div>
        <div className="middle tags-outer">
          <div className="middle tags-inner">
            {" "}
            <div>other</div>
            <div>tags</div>
          </div>
        </div>
        <div className="bottom tags-outer">
          <div className="bottom tags-inner">
            <div>stuff</div>
            <div>sure</div>{" "}
          </div>
        </div>

        <div className="showcase">
          <div className="col-left"></div>
          <DiscoverPlayer />
        </div>
      </div>
    );
  }
}

export default Discover;
