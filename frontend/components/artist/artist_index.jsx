import React from "react";
import { Link, StaticRouter } from "react-router-dom";
import { fetchAlbums } from "../../actions/album_actions";
import { connect } from "react-redux";
import { render } from "react-dom";

class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let albumCards;
    if (this.props.artist.albums) {
      albumCards = this.props.artist.albums.map((key) => {
        let album = this.props.albums[key];
        if (album) {
          return (
            <li className="artist-show-album-card" key={album.id}>
              <Link to={`/artist/${this.props.artist.id}/album/${album.id}`}>
                <div className="album-art">
                  <img
                    src={album.albumArt ? album.albumArt : window.albumcover2}
                    alt={album.albumName}
                  />
                </div>
                <p>{album.albumName}</p>
              </Link>
            </li>
          );
        }
      });
    }

    return (
      <div className="artist-show-main-left">
        <ol className="artist-show-album-card-container">{albumCards}</ol>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
  return {
    albums: state.entities.albums,
    artist: state.entities.artists[ownProps.match.params.id],
  };
};

const mDTP = (dispatch) => {
  return {};
};

export default connect(mSTP, mDTP)(ArtistIndex);
