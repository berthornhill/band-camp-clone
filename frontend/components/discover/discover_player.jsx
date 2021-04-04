/* 
  <DiscoverPlayer> manages the render of the track/artist cards and contains the <AudioPlayer> component and a <NowPlayingInfo> component, 
  unique to the <DiscoverPlayer> pulls first track from tagged id to be passed on to the audio player.
  function <TrackCard> component to build track and clean up component. 

*/

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
  }

  render() {
    const { tags } = this.props;

    if (!tags.tracks) return null;
    const initialTrack = this.props.tracks[tags.tracks[0]];

    let displayedArt;
    debugger;
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

      return (
        <div className="discover-track-card" key={id}>
          <TrackCard
            track={track}
            artist={artist}
            album={album}
            tags={tags}
            id={id}
            handlePlayTrack={this.handlePlayTrack}
          />
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

const TrackCard = ({ track, album, artist, tags, id, handlePlayTrack }) => {
  return (
    <>
      <div className="cover-art-container">
        <img
          className="cover-art"
          src={album.albumArt ? album.albumArt : window.albumcover3}
          alt={`play ${track.title}`}
        />
        <div id={id} className="play-button" onClick={handlePlayTrack}>
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
    </>
  );
};
