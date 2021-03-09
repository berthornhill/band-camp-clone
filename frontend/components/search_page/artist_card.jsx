import React from "react";
import { Link } from "react-router-dom";

const ArtistCard = ({ artist }) => {
  return (
    <li className="search-card" key={artist.id}>
      <Link to={`/artist/${artist.id}`} className="artist-image">
        <img
          src={artist.artistImage ? artist.artistImage : window.albumcover3}
          alt="artist image"
        />
      </Link>
      <div className="info-section">
        <div className="card-type">Artist</div>
        <div className="card-name">{artist.artist}</div>
        <div className="xtra-info">location: {`${artist.location}`}</div>
        <Link to={`/artist/${artist.id}`} className="result-link">
          {`https://bandlamp.herokuapp.com/#/artist/${artist.id}`}
        </Link>
      </div>
    </li>
  );
};

export default ArtistCard;
