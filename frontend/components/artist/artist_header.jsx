import React from "react";
import { Link } from "react-router-dom";

const ArtistHeader = ({ artist }) => {
  // debugger;
  return (
    <div className="artist-header-outer">
      <div className="artist-header-inner">
        <div className="artist-header-image">
          <img src={window.soundboard} alt="artist image" />

          <div className="img-text">{artist.artist}</div>
        </div>
        <div className="artist-header-navs">
          <ul>
            <li>
              <Link to={`/artist/${artist.id}`}>music</Link>
            </li>
            <li>
              <Link to="/">bandlamp</Link>
            </li>
            <li>community</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArtistHeader;
