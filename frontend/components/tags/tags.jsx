import React from "react";
import { fetchTagged } from "../../actions/tag_actions";
import TagsHeader from "./tags_header";
import Carousel from "../carousel/carousel_container";

class Tags extends React.Component {
  componentDidMount() {
    const tag = this.props.match.params.tag;
    this.props.fetchTagged(tag);
  }

  render() {
    // this.props.
    debugger;

    if (!this.props.taggedArtists) return null;

    const content = {
      artists: this.props.artists,
      albums: this.props.albums,
    };

    return (
      <div class="tags-outer">
        <TagsHeader tag={this.props.currentTag} />
        <div className="artists-carousel-outer">
          <div className="artists-carousel-inner">
            <Carousel
              content={content}
              keysArray={this.props.taggedArtists}
              cardsPerPage={5}
            />
          </div>
        </div>
        <div className="albums-carousel-outer">
          <div className="albums-carousel-inner">
            <Carousel
              content={content}
              keysArray={this.props.taggedAlbums}
              cardsPerPage={3}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tags;
