import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import ArtistCard from "./artist_card";
import AlbumCard from "./album_card";
import TrackCard from "./track_card";

class SearchResults extends React.Component {
  render() {
    const { search } = this.props;

    // debugger;

    const artistResults = search.artists.map((id) => {
      let artist = this.props.artists[id];
      return <ArtistCard artist={artist} />;
    });

    // debugger;
    const albumResults = search.albums.map((id) => {
      let album = this.props.albums[id];
      let artist = this.props.artists[album.artistId];
      return <AlbumCard album={album} artist={artist} />;
    });

    const trackResults = search.tracks.map((id) => {
      // debugger;
      let track = this.props.tracks[id];
      let album = this.props.albums[track.albumId];
      let artist = this.props.artists[track.artistId];
      return <TrackCard track={track} album={album} artist={artist} />;
    });

    // debugger;

    return (
      <div className="search-outer">
        <div className="search-inner">
          <div className="search-header">
            <h1>{`SEARCH RESULTS FOR: ${
              this.props.history.location.search.split("=")[1]
            }`}</h1>
          </div>
          <div>
            <ul>{artistResults}</ul>
          </div>
          <div>
            <ul>{albumResults}</ul>
          </div>
          <div>
            <ul>{trackResults}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
