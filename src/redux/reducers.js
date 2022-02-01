import { combineReducers } from "redux";
import movies from "./movies";
import movie from "./movie";
import trivia from "./trivia";

export default combineReducers({
  movies,
  movie,
  trivia,
});
