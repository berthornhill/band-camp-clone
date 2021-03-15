import React from "react";
import { Link } from "react-router-dom";

const CarouselContent = ({ content, keys }) => {
  const taggedArtists = keys.map((id) => {
    let artist = content.artists[id];
    return (
      <li className="artist-tag-card" key={artist.id}>
        <Link to={`/artist/${artist.id}`} className="artist-image">
          <img
            src={artist.artistImage ? artist.artistImage : window.albumcover3}
            alt="artist image"
          />
        </Link>
        <div className="info-section">
          <div className="card-type">Artist</div>
          <Link to={`/artist/${artist.id}`} className="card-name">
            {artist.artist}
          </Link>
          <div className="xtra-info">location: {`${artist.location}`}</div>
        </div>
      </li>
    );
  });

  return (
    <div className="artist-carousel">
      <ul className="carousel-animation">{taggedArtists}</ul>
    </div>
  );
};

export default CarouselContent;
