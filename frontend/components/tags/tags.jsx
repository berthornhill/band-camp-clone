import React from "react";
import TagsHeader from "./tags_header";
import AlbumCarousel from "../carousel/album_carousel_container";
import ArtistCarousel from "../carousel/artist_carousel_container";

class Tags extends React.Component {
  componentDidMount() {
    const tag = this.props.match.params.tag;
    this.props.fetchTagged(tag);
  }

  render() {
    // this.props.
    debugger;

    if (!this.props.tags.artists) return null;

    const content = {
      artists: this.props.artists,
      albums: this.props.albums,
    };

    console.log("Made it this far");

    return (
      <div className="tags-outer">
        <TagsHeader tag={this.props.tags.currentTag} />
        <div className="albums-carousel-outer">
          <div className="albums-carousel-inner">
            <AlbumCarousel
              content={content}
              keysArray={this.props.tags.albums}
              cardsPerPage={5}
            />
          </div>
        </div>
        <div className="artists-carousel-outer">
          <div className="artists-carousel-inner">
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
