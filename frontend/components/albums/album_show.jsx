import React from "react";
import { Link } from "react-router-dom";
import MediaPlayer from "../media_player/media_player_container";
import BigAlbum from "./big_album";

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.album) {
      this.props.fetchAlbum(this.props.match.params.albumId);
    }
  }

  render() {
    // debugger;
    if (!this.props.album) {
      return null;
    }
    // debugger;

    return (
      <div className="artist-show-main-left">
        <MediaPlayer />
        <BigAlbum album={this.props.album} />
      </div>
    );
  }
}

export default AlbumShow;

// ***********************************
// sample this.props
// ************************************
// album:
// albumName: "Speakerboxxx/The Love Below"
// description: "This is our newest realese! It's was a labor of love and it would mean a lot to us if you would listen to it and like and follow us on Bandlamp. Peace and love!"
// id: 1
// __proto__: Object
// tracks: Array(5)
// 0: {id: 6, title: "Song Five", track_no: 5}
// 1: {id: 7, title: "Song Five", track_no: 4}
// 2: {id: 8, title: "Song three", track_no: 3}
// 3: {id: 9, title: "Song two", track_no: 2}
// 4: {id: 10, title: "Song one", track_no: 1}
