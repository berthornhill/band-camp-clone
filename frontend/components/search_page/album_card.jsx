import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({ album, artist }) => {
  return (
    <li className="search-card" key={album.id}>
      <Link
        to={`/artist/${artist.id}/album/${album.id}`}
        className="artist-image"
      >
        <img
          src={album.albumArt ? album.albumArt : window.albumcover3}
          alt="search result image"
        />
      </Link>
      <div className="info-section">
        <div className="card-type">ALBUM</div>
        <div className="card-name">{album.albumName}</div>
        <div className="xtra-info">by {`${artist.artist}`}</div>
        <Link
          to={`/artist/${album.artistId}/album/${album.id}`}
          className="result-link"
        >
          {`https://bandlamp.herokuapp.com/#/artist/${album.artistId}/album/${album.id}`}
        </Link>
      </div>
    </li>
  );
};

export default AlbumCard;
