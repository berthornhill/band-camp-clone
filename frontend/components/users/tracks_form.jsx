import React from "react";

class TracksForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.state = {
      currentAlbum: props.albumsArray[props.albumsArray.length - 1],
    };
    this.changeCurrentAlbum = this.changeCurrentAlbum.bind(this);
  }

  changeCurrentAlbum(index) {
    return (e) => {
      e.preventDefault();
      this.setState({ currentAlbum: this.props.albumsArray[index] });
    };
  }

  render() {
    // builds album image cards which change the current Album for addition of tracks.
    const albumSelect = this.props.albumsArray.map((id, index) => {
      let album = this.props.albums[id];
      return (
        <li key={id}>
          <div
            onClick={this.changeCurrentAlbum(index)}
            // className={id === this.state.currentAlbum ? "current-album" : null}
          >
            <img
              src={album.albumArt}
              alt="album cover art"
              className={
                id === this.state.currentAlbum ? "current-album" : null
              }
            />
          </div>
        </li>
      );
    });

    const selected = this.props.albums[this.state.currentAlbum];

    debugger;

    return (
      <form id="info-form">
        <ul className="album-select-box">{albumSelect}</ul>
        <input
          className="input-button"
          type="file"
          id="newTrack"
          // onChange={this.handleFile}
        />
      </form>
    );
  }
}

export default TracksForm;
