import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class SearchResults extends React.Component {
  render() {
    const { search } = this.props;

    const results = search.map((id) => {
      debugger;
      let artist = this.props.artists[id];

      return (
        <li className="search-card">
          <div>
            <Link to={`/artist/${id}`} className="artist-image">
              <img
                src={
                  artist.artistImage ? artist.artistImage : window.albumcover3
                }
                alt="artist image"
              />
            </Link>
            <div className="artist-card">
              <div className="artist-type">Artist</div>
              <div className="artist-name">{artist.artist}</div>
              <Link to={`/artist/${id}`} className="artist-site">
                {`https://bandlamp.herokuapp.com/#/artist/${id}`}
              </Link>
            </div>
          </div>
        </li>
      );
    });

    return (
      <div>
        <div>
          <h1>Search Results</h1>
        </div>
        <ul>{results}</ul>
      </div>
    );
  }
}

export default SearchResults;
