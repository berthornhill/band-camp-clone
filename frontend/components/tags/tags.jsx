import React from "react";
import TagsHeader from "./tags_header";
import AlbumCarousel from "../carousel/album_carousel_container";
import ArtistCarousel from "../carousel/artist_carousel_container";

class Tags extends React.Component {
  componentDidMount() {
    const tag = this.props.match.params.tag;
    this.props.fetchTagged(tag);
  }

  componentDidUpdate(prevProps) {
    // debugger;
    if (prevProps.match.params.tag !== this.props.match.params.tag) {
      this.props.fetchTagged(this.props.match.params.tag);
    }
  }

  render() {
    // this.props.
    // debugger;

    if (!this.props.tags.artists) return null;

    const content = {
      artists: this.props.artists,
      albums: this.props.albums,
    };

    return (
      <div className="tags-outer">
        <TagsHeader tag={this.props.tags.currentTag} />
        <div className="albums-carousel-outer">
          <div className="albums-carousel-inner">
            <div className="tag-title">
              <h3>
                featured albums tagged with{" "}
                <span>{this.props.tags.currentTag}</span>
              </h3>
            </div>
            <AlbumCarousel
              content={content}
              keysArray={this.props.tags.albums}
              cardsPerPage={5}
            />
          </div>
        </div>
        <div className="artists-carousel-outer">
          <div className="artists-carousel-inner">
            <div className="tag-title">
              <h3>
                featured artists tagged with{" "}
                <span>{this.props.tags.currentTag}</span>
              </h3>
            </div>
            <ArtistCarousel
              content={content}
              keysArray={this.props.tags.artists}
              cardsPerPage={3}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tags;
