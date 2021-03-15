import React from "react";
import { connect } from "react-redux";
import { updateArtist } from "../../actions/artist_show_actions";

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.state = {
      artist: props.artist.artist,
      bio: props.artist.bio,
      location: props.artist.location,
      artistImage: {
        file: null,
        preview: props.artist.artistImage,
      },
      bannerImage: {
        file: null,
        preview: props.artist.bannerImage,
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
    // send form data.
    const formData = new FormData();
    const { id } = this.props.artist;
    formData.append("artist[location]", this.state.location);
    formData.append("artist[bio]", this.state.bio);

    this.state.artistImage.file
      ? formData.append("artist[artist_image]", this.state.artistImage.file)
      : null;

    this.state.bannerImage.file
      ? formData.append("artist[banner_image]", this.state.bannerImage.file)
      : null;

    // formData.append("artist[artist_image]", this.state.artistImage.file);
    // formData.append("artist[banner_image]", this.state.bannerImage.file);

    this.props.updateArtist(id, formData);
  }

  render() {
    const { bio, location } = this.state;

    const artistImagePreview =
      this.state.artistImage.preview || window.emptyband;
    const artistBannerPreview =
      this.state.bannerImage.preview || window.emptyalbumart;

    return (
      <form id="info-form" onSubmit={this.handleSubmit}>
        <label htmlFor="artist-image" className="artist-info-form">
          <img
            className="artist-image-preview"
            src={artistImagePreview}
            alt="preview of image"
          />
          <input
            className="input-button"
            type="file"
            id="artistImage"
            onChange={this.handleFile}
          />
        </label>
        <label htmlFor="banner-image" className="artist-info-form">
          <img
            className="banner-image-preview"
            src={artistBannerPreview}
            alt="preview of image"
          />
          <input type="file" id="bannerImage" onChange={this.handleFile} />
        </label>
        <label htmlFor="artist-bio" className="artist-info-form">
          <div>Artist Bio</div>
          <textarea
            className="form-text-area"
            type="text"
            value={bio ? bio : ""}
            onChange={this.handleChange("bio")}
          />
        </label>
        <label htmlFor="artist-location" className="">
          <div>Location</div>
          <input
            className="location"
            type="text"
            value={location ? location : ""}
            onChange={this.handleChange("location")}
          />
        </label>
        <button type="submit">update artist</button>
      </form>
    );
  }
}

// redux methods for info form

const mSTP = (state, ownProps) => {
  // debugger;
  return {
    artist: state.entities.artists[ownProps.match.params.id],
    errors: state.errors,
  };
};

const mDTP = (dispatch) => {
  return {
    updateArtist: (id, formData) => dispatch(updateArtist(id, formData)),
  };
};

export default connect(mSTP, mDTP)(InfoForm);
