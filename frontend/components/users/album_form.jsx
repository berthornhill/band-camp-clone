import React from "react";

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
      e.target.className = "";
    };
  }

  handleFile(e) {
    debugger;

    e.preventDefault();
    debugger;
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      debugger;
      this.setState({
        [e.target.id]: { preview: fileReader.result, file: file },
      });
    };

    fileReader.readAsDataURL(file);
  }

  handleSubmit(e) {
    e.preventDefault();
    // send form data.
    const formData = new FormData();
    const { id } = this.props.artist;
    formData.append("artist[description]", this.state.description);
    formData.append("artist[albumName]", this.state.albumName);

    this.state.albumArt.file
      ? formData.append("artist[artist_image]", this.state.albumArt.file)
      : null;

    // formData.append("artist[artist_image]", this.state.artistImage.file);
    // formData.append("artist[banner_image]", this.state.bannerImage.file);

    this.props.createAlbum(id, formData);
  }

  render() {
    const { albumName, description } = this.state;

    const albumArtPreview = this.state.albumArt.preview || window.emptyband;
    debugger;
    return (
      <form id="info-form" onSubmit={this.handleSubmit}>
        <label htmlFor="artist-image" className="artist-info-form">
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
          Title
          <input
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

export default AlbumForm;
