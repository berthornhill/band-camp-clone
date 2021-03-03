import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ArtistReducer from "./artist_reducer";
import AlbumsReducer from "./albums_reducer";
import TracksReducer from "./tracks_reducer";
import SearchReducer from "./search_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  artist: ArtistReducer,
  albums: AlbumsReducer,
  tracks: TracksReducer,
  search: SearchReducer,
});

export default EntitiesReducer;

{
  albums: {
    album: {
    }
  }
}
