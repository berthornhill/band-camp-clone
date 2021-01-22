import React from "react";

const AlbumCarousel = () => {
  const album1 = (
    <li className="album-card splash">
      <img src={window.album1} alt="muzac" />
      <title>Best Album Ever</title>
      <artist>Best Band Ever</artist>
    </li>
  );

  return (
    <div className="album-carousel">
      <ul>
        {album1}
        {album1}
        {album1}
        {album1}
        {album1}
      </ul>
    </div>
  );
};

export default AlbumCarousel;
