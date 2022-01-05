import Movie from "../utils/movie";

export const NAMESPACE = `favourite`;
export const ADD_FAVOURITE_MOVIE = `${NAMESPACE}/ADD_FAVOURITE_MOVIE`;
export const REMOVE_FAVOURITE_MOVIE = `${NAMESPACE}/REMOVE_FAVOURITE_MOVIE`;

const initialState = [];

export const addMovie = movie => (dispatch, getState) => {
  const movies = [...getState().favourites, movie];
  dispatch({ type: ADD_FAVOURITE_MOVIE, payload: movies });
};

export const removeMovie = movie => (dispatch, getState) => {
  const MovieObj = new Movie(getState().favourites);
  const newArray = MovieObj.removeFavourite(movie);
  // console.log(newArray);
  dispatch({ type: REMOVE_FAVOURITE_MOVIE, payload: newArray });
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_FAVOURITE_MOVIE:
      return action.payload;
    case REMOVE_FAVOURITE_MOVIE:
      return action.payload;
    default:
      return state;
  }
};

// TO BE DELETED
// const movies = getState().favourites;
// const newArray = movies.filter(item => item.fullTitle !== movie);
// console.log(newArray);
