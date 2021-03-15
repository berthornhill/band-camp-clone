import { connect } from "react-redux";
import AudioPlayer from "./audio_player";

const mSTP = (state, ownProps) => {
  let track = state.ui.playing.track || ownProps.initialTrack;

  return {
    playing: ownProps.playing,
    track: track,
    artist: state.entities.artists[track.artistId],
    album: state.entities.albums[track.albumId],
  };
};

const mDTP = (dispatch) => {
  return {
    dispatchPlayTrack: (track) => dispatch(dispatchPlayTrack(track)),
  };
};

export default connect(mSTP, mDTP)(AudioPlayer);
