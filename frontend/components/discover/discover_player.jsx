import React from "react";
import { Link } from "react-router-dom";
import { playTrack } from "../../actions/player_actions";
import AudioPlayer from "../media_player/audio_player_container";
import NowPlayingInfo from "./now_playing_info";

class DiscoverPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: this.props.playing,
      currentTrackId: null,
    };
    this.handlePlayTrack = this.handlePlayTrack.bind(this);
    this.handlePauseTrack = this.handlePauseTrack.bind(this);
  }

  componentDidMount() {
    // initialTrack = this.props.tracks[this.props.taggedData[0]];
    // this.props.playTrack(initialTrack);
  }

  handlePauseTrack(e) {
    e.preventDefault();
    this.setState({ playing: false, currentTrackId: null });
    e.target.className = "play-button";
  }

  handlePlayTrack(e) {
    e.preventDefault();

    let track = this.props.tracks[e.target.id];
    this.props.playTrack(track);
    this.setState({ currentTrackId: track.id, playing: true });
    // e.target.className = "play-button playing";
  }

  render() {
    debugger;
    const { tags } = this.props;

    if (!tags.tracks) return null;

    // pulls first track from tagged id to be passed on to the audio player
    const initialTrack = this.props.tracks[tags.tracks[0]];

    debugger;
    // this.props.albums[this.props.tracks[tags.tracks[0]].albumId];
    let displayedArt;

    if (!this.state.currentTrackId) {
      displayedArt = this.props.albums[
        this.props.tracks[tags.tracks[0]].albumId
      ].albumArt;
    } else {
      displayedArt = this.props.albums[
        this.props.tracks[this.state.currentTrackId].albumId
      ].albumArt;
    }

    const trackCards = tags.tracks.slice(0, 8).map((id) => {
      let track = this.props.tracks[id];
      let artist = this.props.artists[track.artistId];
      let album = this.props.albums[track.albumId];
      let playOrPause;

      // sets to render div with play button
      // if (this.state.currentTrackId == id) {
      //   debugger;
      //   playOrPause = (
      //     <div
      //       id={id}
      //       className="play-button playing"
      //       onClick={this.handlePlayTrack}
      //     >
      //       <div id={id} className="play-button-overlay"></div>
      //       <div id={id} className="play-button-symbol">
      //         ❚❚
      //       </div>
      //     </div>
      //   );
      // } else {
      //   debugger;
      //   playOrPause = (
      //     <div id={id} className="play-button" onClick={this.handlePlayTrack}>
      //       <div id={id} className="play-button-overlay"></div>
      //       <div id={id} className="play-button-symbol">
      //         ▶
      //       </div>
      //     </div>
      //   );
      // }

      return (
        <div className="discover-track-card" key={id}>
          <div className="cover-art-container">
            <img
              className="cover-art"
              src={album.albumArt ? album.albumArt : window.albumcover3}
              alt={`play ${track.title}`}
            />
            <div id={id} className="play-button" onClick={this.handlePlayTrack}>
              <div id={id} className="play-button-overlay">
                <img
                  id={id}
                  className="play-button-symbol"
                  src={window.playSolid}
                />
              </div>
              <div></div>
            </div>
            {/* {playOrPause} */}
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
              <img
                id="np-cover-art"
                src={displayedArt}
                alt="album art for current playing track"
              />
            </div>
            <AudioPlayer
              initialTrack={initialTrack}
              playing={this.state.playing}
            />
            <NowPlayingInfo initialTrack={initialTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverPlayer;

// info stuff to be added underneath <AudioPlayer>
{
  /* <div className="info-section">
  <div className="xtra-info">
    from the album{" "}
    <Link
      to={`/artist/${album.artistId}/album/${album.id}`}
      className="result-link"
    >
      {`${album.albumName}`}
    </Link>
  </div>
  <div className="xtra-info">
    by
    <Link to={`/artist/${album.artistId}`} className="result-link">
      {`${artist.artist}`}
    </Link>
  </div>
</div>; */
}
