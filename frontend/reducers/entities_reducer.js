import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ArtistReducer from "./artist_reducer";
import AlbumReducer from "./album_reducer";
import TracksReducer from "./tracks_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  artist: ArtistReducer,
  albums: AlbumReducer,
  tracks: TracksReducer,
});

export default EntitiesReducer;

{
  albums: {
    album: {
    }
  }
}
