import React from "react";
import { Link } from "react-router-dom";

const ArtistCard = ({ artist }) => {
  return (
    <li className="search-card">
      <div>
        <Link to={`/artist/${artist.id}`} className="artist-image">
          <img
            src={artist.artistImage ? artist.artistImage : window.albumcover3}
            alt="artist image"
          />
        </Link>
        <div className="artist-card">
          <div className="artist-type">Artist</div>
          <div className="artist-name">{artist.artist}</div>
          <Link to={`/artist/${artist.id}`} className="artist-site">
            {`https://bandlamp.herokuapp.com/#/artist/${artist.id}`}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default ArtistCard;
