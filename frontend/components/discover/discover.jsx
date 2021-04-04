import React from "react";
import DiscoverPlayer from "./discover_player_container";

const TopTags = [
  "featured",
  "electronic",
  "rock",
  "experimental",
  "alternative",
  "metal",
  "hip-hop",
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
    this.props.fetchTaggedTracks(this.state.focusedTag);
  }

  changeTag(e) {
    e.preventDefault();
    this.setState({ focusedTag: e.target.id });
    this.props.fetchTaggedTracks(e.target.id);
  }

  render() {
    const tags = TopTags.map((tag, i) => {
      return (
        <div id={tag} key={i} className="tag-pill" onClick={this.changeTag}>
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
          <div className="top tags-inner">{tags}</div>
        </div>
        <div className="middle tags-outer">
          <div className="middle tags-inner"></div>
        </div>
        <div className="bottom tags-outer">
          <div className="bottom tags-inner"></div>
        </div>
        <DiscoverPlayer />
      </div>
    );
  }
}

export default Discover;
