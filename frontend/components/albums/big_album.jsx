import React from "react";

const BigAlbum = ({ album }) => {
  // debugger;
  return (
    <div className="big-album-outer">
      <div className="big-album-inner">
        <div className="ba-image">
          <img
            src={album.albumArt ? album.albumArt : window.albumcover2}
            alt="album cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BigAlbum;
