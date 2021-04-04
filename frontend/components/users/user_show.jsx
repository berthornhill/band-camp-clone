import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import InfoFrom from "./info_form";
import AlbumForm from "./album_form_container";
import TracksForm from "./tracks_form_container";

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTab = this.handleTab.bind(this);
  }

  handleTab() {}

  handleChange(input) {
    return (e) => {
      e.preventDefault();
    };
  }

  handleSubmit(e) {
    e.preventDefaul();
  }

  componentDidMount() {
    const { artist } = this.props;

    if (!artist) this.props.fetchArtist(this.props.match.params.id);
  }

  render() {
    const { artist } = this.props;

    if (!artist) return null;

    return (
      <div id="user-background">
        <div id="color-bar"></div>
        <div id="user-outer">
          <div id="user-inner">
            <div className="header-container">
              <h1>{this.props.artist.artist}! This is your dashboard.</h1>
              <Link to={`/artist/${artist.id}`} className="artist-site">
                {`https://bandlamp.herokuapp.com/#/artist/${artist.id}`}
              </Link>
            </div>
            <div className="user-grid-box">
              <div className="left-side">
                <div className="left-contents">
                  <Link to={`/users/${this.props.artist.id}/edit`}>
                    edit artist info
                  </Link>
                  <Link to={`/users/${this.props.artist.id}/album`}>
                    add album
                  </Link>
                  <Link to={`/users/${this.props.artist.id}/track`}>
                    add tracks
                  </Link>
                </div>
              </div>
              <div className="right-side">
                <div className="right-contents">
                  <Switch>
                    <Route
                      path="/users/:id/edit"
                      artist={this.props.artist}
                      component={InfoFrom}
                    />
                    <Route path="/users/:id/album" component={AlbumForm} />
                    <Route path="/users/:id/track" component={TracksForm} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserShow;
