import React from "react";
import { Link } from "react-router-dom";

class AlbumCarousel extends React.Component {
  componentDidMount() {
    // debugger;
    this.props.fetchArtists();
  }

  render() {
    const artistsArray = this.props.artists.map((artist) => {
      // let i = Math.floor(Math.random() * 16);

      return (
        <li className="album-card splash" key={artist.id}>
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
        </li>
      );
    });

    // if !this.props.

    // debugger;
    return (
      <div className="album-carousel-outer">
        <div className="album-carousel">
          <ul>{artistsArray.slice(0, 8)}</ul>
        </div>
      </div>
    );
  }
}

export default AlbumCarousel;

// const AlbumCarousel = () => {
//   const album5 = (
//     <li className="album-card splash" key="5">
//       <div>
//         <img src={window.albumcover5} alt="muzac" />
//       </div>
//       <div className="album-title">
//         <span>Best Album Ever</span>
//       </div>
//       <div className="band-name">
//         <span>Best Band Ever</span>
//       </div>
//     </li>
//   );
//   const album2 = (
//     <li className="album-card splash" key="2">
//       <div>
//         <img src={window.albumcover2} alt="muzac" />
//       </div>
//       <div className="album-title">
//         <span>Best Album Ever</span>
//       </div>
//       <div className="band-name">
//         <span>Best Band Ever</span>
//       </div>
//     </li>
//   );
//   const album3 = (
//     <li className="album-card splash" key="3">
//       <div>
//         <img src={window.albumcover3} alt="muzac" />
//       </div>
//       <div className="album-title">
//         <span>Best Album Ever</span>
//       </div>
//       <div className="band-name">
//         <span>Best Band Ever</span>
//       </div>
//     </li>
//   );
//   const album4 = (
//     <li className="album-card splash" key="4">
//       <div>
//         <img src={window.albumcover4} alt="muzac" />
//       </div>
//       <div className="album-title">
//         <span>Best Album Ever</span>
//       </div>
//       <div className="band-name">
//         <span>Best Band Ever</span>
//       </div>
//     </li>
//   );

//   return (
//     <div className="album-carousel-outer">
//       <div className="album-carousel">
//         <ul>
//           {album1}
//           {album2}
//           {album3}
//           {album4}
//           {album5}
//           {album2}
//           {album3}
//           {album4}
//         </ul>
//       </div>
//     </div>
//   );
// };
