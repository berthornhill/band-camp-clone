import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import ArtistHeader from "./artist_header";
import ArtistAlbums from "./artist_albums";
import ArtistSidebar from "./artist_sidebar";
import AlbumShow from "../albums/album_show";

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.artistShow(this.props.match.params.id);
  }

  render() {
    debugger;
    const { albums, artist } = this.props;
    debugger;
    if (!artist.id) {
      return null;
    } else {
      return (
        <div className="artist-show-outer">
          <div className="artist-show-inner">
            <ArtistHeader artist={artist} />
            <div className="artist-show-main">
              <Switch>
                <Route
                  path="/artist/:id/album/:albumId"
                  component={AlbumShow}
                />
                <Route
                  path="/artist/:id"
                  render={(props) => (
                    <ArtistAlbums albums={albums} artist={artist.id} />
                  )}
                />
              </Switch>
              <ArtistSidebar artist={artist} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ArtistShow;
