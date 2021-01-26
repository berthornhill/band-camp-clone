import React from "react";

const ArtistHeader = ({ artist }) => {
  debugger;
  return (
    <div className="artist-header-outer">
      <div className="artist-header-inner">
        <div className="artist-header-image">
          <img src={window.soundboard} alt="artist image" />

          <div className="img-text">{artist.artist}</div>
        </div>
        <div className="artist-header-navs">
          <ul>
            <li>music</li>
            <li>merch</li>
            <li>commuinty</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArtistHeader;
