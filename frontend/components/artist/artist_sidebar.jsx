import React from "react";

const ArtistSidebar = ({ artist }) => {
  // debugger;
  return (
    <div className="artist-show-main-right">
      <div id="artist-pic">
        <img
          src={artist.artistImage ? artist.artistImage : window.albumcover2}
          alt="rock star guy"
        />
      </div>
      <div className="artist-side-bar-name">{artist.artist}</div>
      <div className="artist-side-bar-location">{artist.location}</div>
      <div className="artist-side-bar-bio">{artist.bio}</div>
    </div>
  );
};

export default ArtistSidebar;
