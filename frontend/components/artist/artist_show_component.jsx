import React from "react";
import { Link } from "react-router-dom";
import ArtistHeader from "./artist_header";
import ArtistAlbums from "./artist_albums";

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    this.props.artistShow(this.props.match.params.id);
  }

  render() {
    const { id, albums, artist } = this.props;

    if (!id) return null;

    return (
      <div>
        <ArtistHeader artist={artist} />
        <ArtistSidebar artist={artist} />
        <ArtistAlbums albums={albums} />
      </div>
    );
  }
}

export default ArtistShow;
