import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import InfoFrom from "./info_form";
import AlbumForm from "./album_form_container";
import TracksForm from "./tracks_form_container";

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    debugger;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTab = this.handleTab.bind(this);
  }

  handleTab() {}

  handleChange(input) {
    return (e) => {
      e.preventDefault();
      // set e to state
    };
  }

  handleSubmit(e) {
    e.preventDefaul();
    // send form data.
  }

  componentDidMount() {
    const { artist } = this.props;
    debugger;
    if (!artist) this.props.fetchArtist(this.props.match.params.id);
  }

  render() {
    debugger;
    const { artist } = this.props;
    // debugger;
    if (!artist) return null;

    debugger;
    return (
      <div id="user-background">
        <div id="color-bar"></div>
        <div id="user-outer">
          <div id="user-inner">
            <div className="header-container">
              <h1>{this.props.artist.artist}! This is your dashboard.</h1>
              <Link to="">www.bandlink.###</Link>
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
