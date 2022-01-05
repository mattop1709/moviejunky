import { fetchMovieDetaild } from "../api/movies";

export const NAMESPACE = `movie`;
export const INITIATE_FETCH_MOVIE_DETAILS = `${NAMESPACE}/INITIATE_FETCH_MOVIE_DETAILS`;
export const FETCH_MOVIE_DETAILS_SUCCESS = `${NAMESPACE}/FETCH_MOVIE_DETAILS_SUCCESS`;
export const FETCH_MOVIE_DETAILS_ERROR = `${NAMESPACE}/FETCH_MOVIE_DETAILS_ERROR`;

const initialState = {
  data: {},
  isLoading: false,
  isError: false,
};

export const getMoviesDetails = titleId => async dispatch => {
  dispatch({ type: INITIATE_FETCH_MOVIE_DETAILS });
  const response = await fetchMovieDetaild(titleId);
  //   alert(JSON.stringify(response));

  if (typeof response === "object") {
    dispatch({ type: FETCH_MOVIE_DETAILS_SUCCESS, payload: response });
  }

  if (typeof response === "string") {
    dispatch({ type: FETCH_MOVIE_DETAILS_ERROR });
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INITIATE_FETCH_MOVIE_DETAILS:
      return { ...initialState, isLoading: true };
    case FETCH_MOVIE_DETAILS_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case FETCH_MOVIE_DETAILS_ERROR:
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};
