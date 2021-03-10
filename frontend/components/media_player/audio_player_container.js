import { connect } from "react-redux";
import AudioPlayer from "./audio_player";

const mSTP = (state) => {
  return {
    track: state.entities.playing,
    artist: state.entities.artists[state.entities.playing.artistId],
    album: state.entities.album[state.entities.playing.albumId],
  };
};

const mDTP = (dispatch) => {
  return {
    dispatchPlayTrack: (track) => dispatch(dispatchPlayTrack(track)),
  };
};

export default connect(mSTP, mDTP)(AudioPlayer);
