import React from "react";

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      playing: false,
      track: this.props.track,
      icon: "▶",
      currentTime: "00:00",
      duration: "00:00",
    };

    // basic event methods
    this.handleClick = this.handleClick.bind(this);

    // audio playback methods
    this.togglePlay = this.togglePlay.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.convertTime = this.convertTime.bind(this)
    this.setDuration = this.setDuration.bind(this)
    //` reference to <audio> element for managing playback
    this.audio = React.createRef();
  }
  
  componentDidMount() {
    let audio = this.audio.current;
    debugger
    audio.load()

    // .then(()=>{
      
    //     this.updateTime();
    //     this.updateDuration();`
    //   // this.setState({ currentTime: audio.currentTime, duration: audio.duration });
    // } )
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

  setDuration(){
    let audio = this.audio.current;

    let duration = this.convertTime(audio.duration)
    this.setState({ duration: duration });
  }

  updateTime() {
    let audio = this.audio.current;
    console.log("updating time");
    debugger
    let time =this.convertTime(audio.currentTime)
    this.setState({currentTime: time})
  }
  
  convertTime(time) {

  let totalSeconds = Math.floor(time)
  let mins = (totalSeconds / 60).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      maximumFractionDigits: 0,
      useGrouping: false
    })
  let seconds = (totalSeconds % 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    maximumFractionDigits: 0,
    useGrouping: false
  })

    let humanReadableTime = `${mins}:${seconds}`
    return humanReadableTime
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
            <div>{this.state.currentTime}/{this.state.duration}</div>
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
          onLoadedData={(e)=> this.setDuration()}
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
