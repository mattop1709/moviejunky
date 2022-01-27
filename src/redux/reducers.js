import { combineReducers } from "redux";
import movies from "./movies";
import movie from "./movie";
import favourites from "./favourites";
import trivia from "./trivia";

export default combineReducers({
  movies,
  movie,
  favourites,
  trivia,
});
