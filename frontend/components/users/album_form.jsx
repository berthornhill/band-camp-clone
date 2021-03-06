import React from "react";
import { withRouter } from "react-router-dom";

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumName: "",
      description: "",
      albumArt: {
        file: null,
        preview: props.artist.artistArt,
      },

      errors: props.errors,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleChange(input) {
    return (e) => {
      e.preventDefault();
      this.setState({ [input]: e.target.value });
      // e.target.className = "";
    };
  }

  handleFile(e) {
    // debugger;

    e.preventDefault();

    // debugger;
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      // debugger;
      this.setState({
        [e.target.id]: { preview: fileReader.result, file: file },
      });
    };

    fileReader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.albumArt.file) return alert("You must add some album art");

    // send form data.
    const formData = new FormData();
    const { id } = this.props.artist;
    formData.append("album[description]", this.state.description);
    formData.append("album[album_name]", this.state.albumName);
    formData.append("album[album_art]", this.state.albumArt.file);
    formData.append("album[artist_id]", id);

    this.props
      .createAlbum(id, formData)
      .then(() => this.props.history.push(`/users/${id}/track`));
  }

  render() {
    const { albumName, description } = this.state;

    const albumArtPreview = this.state.albumArt.preview || window.emptyband;
    // debugger;
    return (
      <form id="info-form" onSubmit={this.handleSubmit}>
        <h4 className="form-title">CREATE A NEW ALBUM</h4>
        <label htmlFor="artist-image" className="artist-info-form">
          <span>Select some artwork for your album</span>
          <img
            className="artist-image-preview"
            src={albumArtPreview}
            alt="preview of image"
          />
          <input
            className="input-button"
            type="file"
            id="albumArt"
            onChange={this.handleFile}
          />
        </label>
        <label htmlFor="album-albumName" className="artist-info-form">
          <div>Title</div>
          <input
            className="location"
            type="text"
            value={albumName ? albumName : ""}
            onChange={this.handleChange("albumName")}
          />
        </label>

        <label htmlFor="artist-description" className="artist-info-form">
          <div>Description</div>
          <textarea
            className="form-text-area"
            type="text"
            value={description ? description : ""}
            onChange={this.handleChange("description")}
          />
        </label>
        <button type="submit">Create Album</button>
      </form>
    );
  }
}

export default withRouter(AlbumForm);
