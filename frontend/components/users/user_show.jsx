import React from "react";
import { Link } from "react-router-dom";

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    debugger;

    this.state = props.artist;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

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
                <div classname="left-contents">
                  Links to add album/add track
                </div>
              </div>
              <div className="right-side">
                <div className="right-contents">
                  <form onSubmit={this.handleSubmit}>
                    <label htmlFor="artist-image" className="artist-info-form">
                      <input type="file" />
                    </label>

                    <label htmlFor="banner-image" className="artist-info-form">
                      <input type="file" />
                    </label>
                    <label htmlFor="artist-bio" className="artist-info-form">
                      <input type="text" />
                    </label>
                    <label
                      htmlFor="artist-location"
                      className="artist-info-form"
                    >
                      <input type="text" />
                    </label>
                  </form>
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
