import React from "react";
import { Link } from "react-router-dom";

class DiscoverPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      // currentTrackId: this.props.tags.taggedData[0],
    };
  }

  render() {
    const { tags } = this.props;
    // debugger;
    if (!tags.taggedData) return null;

    const trackCards = tags.taggedData.slice(0, 8).map((id) => {
      let track = this.props.tracks[id];
      let artist = this.props.artists[track.artistId];
      let album = this.props.albums[track.albumId];

      return (
        <div className="discover-track-card">
          <div className="cover-art-container">
            <img
              className="cover-art"
              src={album.albumArt ? album.albumArt : window.albumcover3}
              alt={`play ${track.title}`}
            />
            <div class="play-button">
              <div class="play-button-overlay"></div>
              <div class="play-button-symbol">▶</div>
            </div>
          </div>
          <div className="track-info">
            <div className="title">
              <Link
                to={`/artist/${album.artistId}/album/${album.id}`}
                className="card-link title"
              >
                {track.title}
              </Link>
            </div>
            <div className="artist">
              <Link to={`/artist/${artist.id}`} className="card-link artist">
                {artist.artist}
              </Link>
            </div>
            <div className="card-tag">{tags.currentTag}</div>
          </div>
        </div>
      );
    });

    return (
      <div className="showcase">
        <div className="col-left">{trackCards}</div>
        <div className="col-right">
          <h1>I will play music very soon!</h1>;
        </div>
      </div>
    );
  }
}

export default DiscoverPlayer;
