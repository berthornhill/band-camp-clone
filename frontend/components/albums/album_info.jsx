import React from "react";
import BigAlbum from "../albums/big_album";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "../media_player/audio_player_container";

class AlbumInfo extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.state = {
      playing: false,
      currentTrackId: null,
    };

    this.handlePlayTrack = this.handlePlayTrack.bind(this);
  }

  handlePlayTrack(e) {
    e.preventDefault();

    let track = this.props.tracks[e.target.value];
    this.props.playTrack(track);
    this.setState({ currentTrackId: track.id, playing: true });
    // e.target.className = "play-button playing";
  }

  render() {
    // debugger;
    const { artist } = this.props;

    const initialTrack = this.props.tracks[this.props.album.tracks[0]];

    let tracks = this.props.album.tracks.map((id) => {
      let track = this.props.tracks[id];

      let icon = window.playSolidBlack;
      if (this.state.currentTrackId === id) {
        icon = window.pause;
      }

      if (track) {
        return (
          <li className="single-track" key={id}>
            <div className="play-button-container">
              <input
                type="image"
                value={id}
                src={icon}
                alt="play-pause button"
                onClick={this.handlePlayTrack}
              />
            </div>
            {/* <button value={id} id={id} onClick={this.handlePlayTrack}>
              <img src={icon} alt="play-pause button" />
            </button> */}
            <div>{track.trackNo}.</div>
            <div>{track.title}</div>
            <a
              className="download-link"
              href={track.url}
              download={track.title}
            >
              download
            </a>
          </li>
        );
      }
    });

    return (
      <div className="album-show-main-outer">
        <div className="media-player-outer">
          <div className="media-player-inner">
            <div className="ba-title">
              <h1>{this.props.album.albumName}</h1>
              <div>
                by <Link to={`/artist/${artist.id}`}>{artist.artist}</Link>
              </div>
            </div>
            {initialTrack ? (
              <AudioPlayer
                initialTrack={initialTrack}
                playing={this.state.playing}
              />
            ) : (
              <h2 className="needs-music">🎶 This album needs some music 🎶</h2>
            )}

            <div className="blurb">
              Digital Album Streaming + Download Includes unlimited streaming
              via the free Bandlamp app, plus high-quality download in MP3, FLAC
              and more.
            </div>

            <div className="ba-description">{this.props.album.description}</div>
            <div className="tracks-list">
              <ul>{tracks}</ul>
            </div>
          </div>
        </div>

        <BigAlbum album={this.props.album} />
      </div>
    );
  }
}

export default AlbumInfo;
