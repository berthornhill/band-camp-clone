import React from "react";
import { Link, StaticRouter } from "react-router-dom";
import { fetchAlbums } from "../../actions/album_actions";
import { connect } from "react-redux";
import { render } from "react-dom";

class ArtistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.fetchAlbums(this.props.match.params.id);
  }

  render() {
    // artist.albums [1,2,3,4]
    //  albums: {1:{}, 2:{}, 3:{}, 4:{}} //{}
    let albumCards;
    // debugger;
    if (this.props.artist.albums) {
      albumCards = this.props.artist.albums.map((key) => {
        let album = this.props.albums[key];
        if (album) {
          return (
            <li className="artist-show-album-card" key={album.id}>
              <Link to={`/artist/${this.props.artist.id}/album/${album.id}`}>
                <div className="album-art">
                  <img src={window.albumcover5} alt={album.albumName} />
                </div>
                <p>{album.albumName}</p>
              </Link>
            </li>
          );
        }
      });
    }
    // debugger;

    return (
      <div className="artist-show-main-left">
        <ol className="artist-show-album-card-container">{albumCards}</ol>
      </div>
    );
  }
}

// {
// albumName: "Good Intentions",
// description: "This is our newes",
// id: 131
// }

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    albums: state.entities.albums,
    artist: state.entities.artist[ownProps.match.params.id], //[1,2,334,4,53]
  };
};

const mDTP = (dispatch) => {
  // debugger;
  return {
    fetchAlbums: (artistId) => dispatch(fetchAlbums(artistId)),
  };
};

export default connect(mSTP, mDTP)(ArtistIndex);
