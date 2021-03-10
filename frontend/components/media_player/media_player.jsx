import React from "react";
import BigAlbum from "../albums/big_album";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.state = {
      url: "",
    };
    this.playSong = this.playSong.bind(this);
  }

  playSong(e) {
    // debugger;
    this.setState({ url: e.target.value });
  }

  render() {
    // debugger;
    const { artist } = this.props;

    let tracks = this.props.album.tracks.map((key) => {
      let track = this.props.tracks[key];
      if (track) {
        return (
          <li className="single-track" key={track.trackNo}>
            <button value={track.url} onClick={(value) => this.playSong(value)}>
              ▶
            </button>
            <div>{track.trackNo}</div>
            <div>{track.title}</div>
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
            {/* <audio controls src={this.state.url}>
              {" "}
              Your browser does not support the
              <code>audio</code> element.
            </audio> */}
            <ReactAudioPlayer src={this.state.url} autoPlay controls />
            <div className="now-playing-container">
              <ul>{tracks[0]}</ul>
            </div>
            <div className="blurb">
              Digital Album Streaming + Download Includes unlimited streaming
              via the free Bandcamp app, plus high-quality download in MP3, FLAC
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

export default MediaPlayer;
