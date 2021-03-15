import React from "react";
import { Link } from "react-router-dom";

const CarouselContent = ({ content, keys }) => {
  debugger;

  const taggedAlbums = keys.map((id) => {
    const album = content.albums[id];

    const artist = content.artists[album.artistId];

    return (
      <li className="album-tag-card" key={album.id}>
        <Link
          to={`/artist/${artist.id}/album/${album.id}`}
          className="artist-image"
        >
          <img
            src={album.albumArt ? album.albumArt : window.albumcover2}
            alt="album image"
          />
        </Link>
        <div className="info-section">
          <div className="card-name">
            <Link
              to={`/artist/${album.artistId}/album/${album.id}`}
              className="card-name"
            >
              {album.albumName}
            </Link>
          </div>
          <div className="xtra-info">by {`${artist.artist}`}</div>
        </div>
      </li>
    );
  });

  return (
    <div className="album-carousel">
      <ul>{taggedAlbums}</ul>
    </div>
  );
};

export default CarouselContent;
