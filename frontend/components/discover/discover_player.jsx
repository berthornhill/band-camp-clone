import React from "react";
import { Link } from "react-router-dom";
import { playTrack } from "../../actions/player_actions";
import AudioPlayer from "../media_player/audio_player_container";

class DiscoverPlayer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   playing: false,
    //   // currentTrackId: empty,
    // };
  }

  componentDidMount() {
    // initialTrack = this.props.tracks[this.props.taggedData[0]];
    // this.props.playTrack(initialTrack);
    debugger;
  }

  render() {
    const { tags } = this.props;
    debugger;
    if (!tags.taggedData) return null;

    debugger;
    // pulls first track from tagged id to be passed on to the audio player
    const initialTrack = this.props.tracks[tags.taggedData[0]];

    const trackCards = tags.taggedData.slice(0, 8).map((id) => {
      let track = this.props.tracks[id];
      let artist = this.props.artists[track.artistId];
      let album = this.props.albums[track.albumId];

      return (
        <div className="discover-track-card" key={id}>
          <div className="cover-art-container">
            <img
              className="cover-art"
              src={album.albumArt ? album.albumArt : window.albumcover3}
              alt={`play ${track.title}`}
            />
            <div className="play-button">
              <div className="play-button-overlay"></div>
              <div className="play-button-symbol">▶</div>
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
          <div className="col-right-outer">
            <div className="now-playing-image">
              <img id="np-cover-art" src={window.albumcover3} alt="" />
            </div>
            <AudioPlayer initialTrack={initialTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverPlayer;
