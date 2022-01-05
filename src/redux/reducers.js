import { combineReducers } from "redux";
import movies from "./movies";
import movie from "./movie";
import favourites from "./favourites";

export default combineReducers({
  movies,
  movie,
  favourites,
});
