import React from "react";

class TracksForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.state = {
      currentAlbum: props.albumsArray[props.albumsArray.length - 1],
      title: "",
      trackNumber: "",
      file: "",
    };
    this.changeCurrentAlbum = this.changeCurrentAlbum.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleChange(input) {
    return (e) => {
      e.preventDefault();
      this.setState({ [input]: e.target.value });
    };
  }

  handleFile(e) {
    e.preventDefault();
    // debugger;
    const file = e.currentTarget.files[0];
    // const fileReader = new FileReader();

    this.setState({ file: file });
  }

  changeCurrentAlbum(index) {
    return (e) => {
      e.preventDefault();
      this.setState({ currentAlbum: this.props.albumsArray[index] });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // const file = e.currentTarget.files[0];

    debugger;
    const id = this.state.currentAlbum;
    debugger;
    const newTrackNo = this.props.albums[id].tracks.length + 1;
    const formData = new FormData();
    formData.append("track[song]", this.state.file);
    formData.append("track[title]", this.state.title);
    formData.append("track[album_id]", id);
    formData.append("track[track_no]", newTrackNo);

    this.props.createTracks(id, formData);
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
      <form id="info-form" onSubmit={this.handleSubmit}>
        <ul className="album-select-box">{albumSelect}</ul>
        <label className="add-tracks-label" htmlFor="addTrack">
          Add Track
          <input
            className="input-button"
            type="file"
            id="newTrack"
            accept="audio/*"
            onChange={this.handleFile}
          />
        </label>
        <label htmlFor="title">
          Track Title:
          <input type="text" onChange={this.handleChange("title")} />
        </label>
        <button type="submit">Upload Track</button>
      </form>
    );
  }
}

export default TracksForm;

// albumId
// name
// trackNumber
