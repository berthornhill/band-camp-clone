import React from "react";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // playing: props.playing,
      // track: props.track,
      icon: window.playSolidBlack,
      currentTime: "00:00",
      duration: "00:00",
    };

    // basic event methods
    this.handleClick = this.handleClick.bind(this);

    // audio playback methods
    this.togglePlay = this.togglePlay.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.convertTime = this.convertTime.bind(this);
    this.setDuration = this.setDuration.bind(this);
    this.onLoadData = this.onLoadData.bind(this);
    this.updateProgressBar = this.updateProgressBar.bind(this);
    this.scrub = this.scrub.bind(this);
    //` reference to <audio> element for managing playback
    this.audio = React.createRef();
    this.progress = React.createRef();
  }

  componentDidMount() {
    let audio = this.audio.current;

    audio.load();
    this.props.playing ? this.togglePlay() : null;

    // .then(()=>{

    //     this.updateTime();
    //     this.updateDuration();`
    //   // this.setState({ currentTime: audio.currentTime, duration: audio.duration });
    // } )
  }

  // componentDidUpdate(prevProps) {
  //
  //   if (prevProps.track !== this.props.track) {
  //     this.setState({ track: this.props.track, playing: this.props.playing });
  //   } else if (
  //     prevProps.track === this.props.track &&
  //     this.props.playing !== this.state.playing
  //   ) {
  //     this.togglePlay();
  //   }
  // }

  handleClick(e) {
    e.preventDefault();
    this.togglePlay();
  }

  onLoadData() {
    this.props.playing ? this.togglePlay() : null;
    this.setDuration();
  }

  togglePlay() {
    let audio = this.audio.current;

    if (audio.paused) {
      audio.play();
      this.setState({ icon: window.pause, playing: true });
    } else {
      audio.pause();
      this.setState({ icon: window.playSolidBlack, playing: false });
    }
  }

  setDuration() {
    let audio = this.audio.current;

    let duration = this.convertTime(audio.duration);
    this.setState({ duration: duration });
  }

  updateTime() {
    let audio = this.audio.current;

    let time = this.convertTime(audio.currentTime);
    this.setState({ currentTime: time });
    this.updateProgressBar();
  }

  convertTime(time) {
    let totalSeconds = Math.floor(time);
    let mins = (totalSeconds / 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      maximumFractionDigits: 0,
      useGrouping: false,
    });
    let seconds = (totalSeconds % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      maximumFractionDigits: 0,
      useGrouping: false,
    });

    let humanReadableTime = `${mins}:${seconds}`;
    return humanReadableTime;
  }

  updateProgressBar() {
    let audio = this.audio.current;
    const currentProgress = (audio.currentTime / audio.duration) * 100;

    this.progress.current.style.flexBasis = `${currentProgress}%`;
  }

  scrub(e) {
    e.preventDefault();
    const audio = this.audio.current;
    const clickedPos = e.pageX - e.target.offsetLeft;
    const newTime = (clickedPos / e.target.offsetWidth) * audio.duration;
    audio.currentTime = newTime;
  }

  render() {
    return (
      <div id="audio-player-container">
        <div id="play-button-container" onClick={this.handleClick}>
          <div className="play-pause">
            <img className="play-pause" src={this.state.icon} />
          </div>
        </div>
        <div className="track-details-container">
          <div className="title-times-container">
            <div>{this.props.track.title}</div>
            <div>
              {this.state.currentTime}/{this.state.duration}
            </div>
          </div>
          <div id="prog-bar-container">
            <div id="prog-bar" onClick={this.scrub}>
              <div id="prog-fill" ref={this.progress}></div>
              <div id="prog-knob"></div>
            </div>
          </div>
        </div>
        <audio
          controls
          src={this.props.track.url}
          id="audio-element"
          ref={this.audio}
          onTimeUpdate={(e) => this.updateTime()}
          onLoadedData={(e) => this.onLoadData()}
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
