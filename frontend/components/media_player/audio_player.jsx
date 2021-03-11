import React from "react";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      playing: false,
      track: this.props.track,
      icon: "▶",
      currentTime: 0.0,
      duration: 0.0,
    };

    // basic event methods
    this.handleClick = this.handleClick.bind(this);

    // audio playback methods
    this.togglePlay = this.togglePlay.bind(this);
    this.updateTime = this.updateTime.bind(this);

    // reference to <audio> element for managing playback
    this.audio = React.createRef();
  }
  updateTime() {
    console.log("updating time");
  }

  componentDidMount() {
    let audio = this.audio.current;
    this.setState({ currentTime: audio.currentTime, duration: audio.duration });
  }

  handleClick(e) {
    e.preventDefault();
    this.state.playing ? null : this.togglePlay();
  }

  togglePlay() {
    let audio = this.audio.current;
    debugger;
    if (audio.paused) {
      audio.play();
      this.setState({ icon: "❚❚" });
    } else {
      audio.pause();
      this.setState({ icon: "▶" });
    }
    debugger;
  }

  render() {
    return (
      <div id="audio-player-container">
        <div id="play-button-container" onClick={this.handleClick}>
          <div className="play-pause">{this.state.icon}</div>
        </div>
        <div className="track-details-container">
          <div className="title-times-container">
            <div>{this.props.track.title}</div>
            <div>0:00/1:56</div>
          </div>
          <div id="prog-bar-container">
            <div id="prog-bar"></div>
          </div>
        </div>
        <audio
          controls
          src={this.state.track.url}
          id="audio-element"
          ref={this.audio}
          onTimeUpdate={(e) => this.updateTime()}
        >
          {" "}
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;

// '❚❚'
