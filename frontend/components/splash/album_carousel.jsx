import React from "react";

const AlbumCarousel = () => {
  const album1 = (
    <li className="album-card splash" key="1">
      <div>
        <img src={window.albumcover1} alt="muzac" />
      </div>
      <div className="album-title">
        <span>Best Album Ever</span>
      </div>
      <div className="band-name">
        <span>Best Band Ever</span>
      </div>
    </li>
  );
  const album5 = (
    <li className="album-card splash" key="5">
      <div>
        <img src={window.albumcover5} alt="muzac" />
      </div>
      <div className="album-title">
        <span>Best Album Ever</span>
      </div>
      <div className="band-name">
        <span>Best Band Ever</span>
      </div>
    </li>
  );
  const album2 = (
    <li className="album-card splash" key="2">
      <div>
        <img src={window.albumcover2} alt="muzac" />
      </div>
      <div className="album-title">
        <span>Best Album Ever</span>
      </div>
      <div className="band-name">
        <span>Best Band Ever</span>
      </div>
    </li>
  );
  const album3 = (
    <li className="album-card splash" key="3">
      <div>
        <img src={window.albumcover3} alt="muzac" />
      </div>
      <div className="album-title">
        <span>Best Album Ever</span>
      </div>
      <div className="band-name">
        <span>Best Band Ever</span>
      </div>
    </li>
  );
  const album4 = (
    <li className="album-card splash" key="4">
      <div>
        <img src={window.albumcover4} alt="muzac" />
      </div>
      <div className="album-title">
        <span>Best Album Ever</span>
      </div>
      <div className="band-name">
        <span>Best Band Ever</span>
      </div>
    </li>
  );

  return (
    <div className="album-carousel">
      <ul>
        {album1}
        {album2}
        {album3}
        {album4}
        {album5}
        {album2}
        {album3}
        {album4}
      </ul>
    </div>
  );
};

export default AlbumCarousel;
