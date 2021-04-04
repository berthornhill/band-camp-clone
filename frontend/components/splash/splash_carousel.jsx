// <SplashCarousel> displays the 8 artist cards with links to their albums and some infor about them, including location.
//  <ArtistCard>: function to build content of each artist card.

import React from "react";
import { Link } from "react-router-dom";

class SplashCarousel extends React.Component {
  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    const artistsArray = this.props.artists.map((artist) => {
      return (
        <li className="album-card splash" key={artist.id}>
          <ArtistCard artist={artist} />
        </li>
      );
    });

    return (
      <div className="album-carousel-outer">
        <div className="album-carousel">
          <ul>{artistsArray.slice(0, 8)}</ul>
        </div>
      </div>
    );
  }
}

export default SplashCarousel;

const ArtistCard = ({ artist }) => {
  debugger;
  return (
    <Link to={`/artist/${artist.id}`}>
      <div>
        <img src={artist.artistImage} alt={artist.artist} />
      </div>
      <div className="album-title">
        <span>Artist</span>
      </div>
      <div className="band-name">
        <span>{artist.artist}</span>
      </div>
      <div className="band-name">
        <span>in 🇺🇸 {artist.location}</span>
      </div>
    </Link>
  );
};
