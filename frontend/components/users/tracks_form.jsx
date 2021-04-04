import React from "react";
import { withRouter } from "react-router-dom";

class TracksForm extends React.Component {
  constructor(props) {
    super(props);

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
    this.handleDeleteAlbum = this.handleDeleteAlbum.bind(this);
    this.handleDeleteTrack = this.handleDeleteTrack.bind(this);
  }

  handleChange(input) {
    return (e) => {
      e.preventDefault();
      this.setState({ [input]: e.target.value });
    };
  }

  handleDeleteAlbum(e) {
    e.preventDefault();

    const id = this.props.match.params.id;

    this.props.deleteAlbum(this.state.currentAlbum);
    this.props.history.push(`/users/${id}/album`);
  }

  handleDeleteTrack(e) {
    e.preventDefault();
    this.props.deleteTrack(e.target.id);
  }

  handleFile(e) {
    e.preventDefault();

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

    const id = this.state.currentAlbum;

    const newTrackNo = this.props.albums[id].tracks.length + 1;
    const formData = new FormData();
    formData.append("track[song]", this.state.file);
    formData.append("track[title]", this.state.title);
    formData.append("track[album_id]", id);
    formData.append("track[track_no]", newTrackNo);

    this.props.createTracks(id, formData);
  }

  render() {
    if (this.props.albumsArray.length === 0)
      return <h1>Try uploading creating an album first!</h1>;

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

    const trackList = this.props.albums[this.state.currentAlbum].tracks.map(
      (trackId) => {
        let track = this.props.tracks[trackId];

        return (
          <li key={track.id} className="track-list">
            <div>
              <div>{track.trackNo}.</div>
              <div>{track.title}</div>
            </div>
            <button
              id={track.id}
              className="track-delete"
              onClick={this.handleDeleteTrack}
            >
              DELETE TRACK
            </button>
          </li>
        );
      }
    );

    const selected = this.props.albums[this.state.currentAlbum];

    return (
      <div id="info-form">
        <h4 className="form-title">UPLOAD TRACKS</h4>

        <span>Select an album:</span>

        <ul className="album-select-box">{albumSelect}</ul>
        <form action="delete" onClick={this.handleDeleteAlbum}>
          <button id="delete-album" type="submit">
            DELETE ALBUM AND ALL CONNECTED TRACKS
          </button>
        </form>
        <ol>{trackList}</ol>
        <label className="add-tracks-label" htmlFor="addTrack">
          <div>Add Track*:</div>
          <div className="grey">choose an audio file to upload</div>
          <input
            className="input-button"
            type="file"
            id="newTrack"
            accept="audio/*"
            onChange={this.handleFile}
          />
        </label>
        <form onSubmit={this.handleSubmit}>
          <label className="track-form-label" htmlFor="title">
            <div>Track Title*:</div>
            <input
              type="text"
              onChange={this.handleChange("title")}
              className="location"
            />
          </label>
          <button type="submit">Upload Track</button>
        </form>
      </div>
    );
  }
}

export default withRouter(TracksForm);
