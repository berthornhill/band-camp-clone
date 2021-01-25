import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ArtistReducer from "./artist_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  artist: ArtistReducer,
});

export default EntitiesReducer;
