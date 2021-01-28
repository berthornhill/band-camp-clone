import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import ArtistHeader from "./artist_header";
import ArtistIndex from "./artist_index";
import ArtistSidebar from "./artist_sidebar";
import AlbumShow from "../albums/album_show_container";
import MediaPlayer from "../media_player/media_player_container";

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    this.props.fetchArtist(this.props.match.params.id);
  }

  render() {
    // debugger;
    const { artist } = this.props;
    debugger;
    if (!artist) {
      return null;
    } else {
      // debugger;
      return (
        <div className="artist-show-outer">
          <div className="artist-show-inner">
            <ArtistHeader artist={artist} />
            <div className="artist-show-main">
              <Switch>
                <Route
                  path="/artist/:id/album/:albumId"
                  component={MediaPlayer}
                />
                <Route path="/artist/:id" component={ArtistIndex} />

                {/* <Route
                  path="/artist/:id"
                  render={(props) => (
                    <ArtistAlbums albums={albums} artist={artist.id} />
                  )}
                /> */}
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
