import React from "react";
import { Link } from "react-router-dom";

const ArtistAlbums = ({ albums, artist }) => {
  // debugger;
  const albumCards = albums.map((album) => {
    return (
      <li className="artist-show-album-card" key={album.id}>
        <Link to={`/artist/${artist.id}/album/${album.id}`}>
          <div className="album-art">
            <img src={window.albumcover5} alt={album.albumName} />
          </div>
          <p>{album.albumName}</p>
        </Link>
      </li>
    );
  });

  // debugger;
  return (
    <div className="artist-show-main-left">
      <ol className="artist-show-album-card-container">{albumCards}</ol>
    </div>
  );
};

export default ArtistAlbums;

// {
// albumName: "Good Intentions",
// description: "This is our newes",
// id: 131
// }
