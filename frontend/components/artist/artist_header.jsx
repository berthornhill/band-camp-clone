import React from "react";

const ArtistHeader = ({ artist }) => {
  return (
    <div className="outer-container">
      <div className="artist-header-image">
        <img src={window.soundboard} alt="artist image" />
      </div>
    </div>
  );
};

export default ArtistHeader;
