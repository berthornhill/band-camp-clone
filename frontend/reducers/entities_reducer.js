import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ArtistReducer from "./artist_reducer";
import AlbumReducer from "./album_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  artist: ArtistReducer,
  albums: AlbumReducer,
});

export default EntitiesReducer;
