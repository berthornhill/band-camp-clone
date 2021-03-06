import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import ArtistCard from "./artist_card";

class SearchResults extends React.Component {
  render() {
    const { search } = this.props;

    const artistResults = search.artists.map((id) => {
      let artist = this.props.artists[id];
      return <ArtistCard artist={artist} />;
    });

    // const albumResults = search.album.map((id) => {
    //   let album = this.props.albums[id];
    //   return <AlbumCard album={album} />;
    // });

    // const trackResults = search.tracks.map((id) => {
    //   let track = this.props.tracks[id];
    //   let album = this.props.albums[track.album_id];
    //   let artist = this.props.artist[album.artist_id];
    //   return <TrackCard track={track} />;
    // });

    return (
      <div>
        <div>
          <h1>SEARCH TITLE DIV</h1>
        </div>
        <div>
          <h1>Artist Results</h1>
          <ul>{artistResults}</ul>
        </div>
        {/* <div>
          <h1>Album Results</h1>
          <ul>{albumResults}</ul>
        </div>
        <div>
          <h1>Artist Results</h1>
          <ul>{trackResults}</ul>
        </div> */}
      </div>
    );
  }
}

export default SearchResults;
