import React from "react";
import DiscoverPlayer from "./discover_player";

const TopTags = [
  "featured",
  "electronic",
  "rock",
  "experimental",
  "alternative",
  "metal",
  "hip-hop/rap",
  "punk",
  "ambient",
  "soundtrack",
  "jazz",
  "classical",
];

class Discover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedTag: "featured",
    };
    this.changeTag = this.changeTag.bind(this);
  }

  componentDidMount() {
    this.props.fetchTags({ tag: this.state.focusedTag });
  }

  changeTag(e) {
    debugger;
    e.preventDefault();
    this.setState({ focusedTag: e.target.id });
    this.props.fetchTags({ tag: this.state.focusedTag });
  }

  render() {
    const tags = TopTags.map((tag) => {
      return (
        <div id={tag} className="tag-pill" onClick={this.changeTag}>
          {tag}
        </div>
      );
    });

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
            {tags}
            {/* {     <div>featured</div>
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
            <div>classical</div>} */}
          </div>
        </div>
        <div className="middle tags-outer">
          <div className="middle tags-inner"></div>
        </div>
        <div className="bottom tags-outer">
          <div className="bottom tags-inner"></div>
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
