import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

const NowPlayingInfo = ({ artist, album }) => {
  return (
    <div className="np-info-section">
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
        by{" "}
        <Link to={`/artist/${album.artistId}`} className="result-link">
          {`${artist.artist}`}
        </Link>
      </div>
      <div className="xtra-info">
        {artist.location != "null" ? artist.location : "location unknown"}
      </div>
    </div>
  );
};

const mSTP = (state, ownProps) => {
  let track = state.ui.playing.track || ownProps.initialTrack;
  debugger;
  return {
    // playing: ownProps.playing,
    // track: track,
    artist: state.entities.artists[track.artistId],
    album: state.entities.albums[track.albumId],
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(NowPlayingInfo);
