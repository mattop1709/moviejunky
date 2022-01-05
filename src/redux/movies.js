import { fetchMovies } from "../api/movies";

export const NAMESPACE = `movies`;
export const INITIATE_FETCH_MOVIES = `${NAMESPACE}/INITIATE_FETCH_MOVIES`;
export const FETCH_MOVIES_SUCCESS = `${NAMESPACE}/FETCH_MOVIES_SUCCESS`;
export const FETCH_MOVIES_ERROR = `${NAMESPACE}/FETCH_MOVIES_ERROR`;
export const RESET_FETCH_MOVIES = `${NAMESPACE}/RESET_FETCH_MOVIES`;

const initialState = {
  lists: [],
  isLoading: false,
  isError: false,
};

export const getMoviesByTitle = title => async dispatch => {
  dispatch({ type: INITIATE_FETCH_MOVIES });
  const response = await fetchMovies(title);
  // alert(JSON.stringify(response));

  if (typeof response === "object") {
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response });
  }

  if (typeof response === "string") {
    dispatch({ type: FETCH_MOVIES_ERROR });
  }
};

export const resetFetchMovies = () => dispatch => {
  dispatch({ type: RESET_FETCH_MOVIES });
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INITIATE_FETCH_MOVIES:
      return { ...initialState, isLoading: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, lists: action.payload, isLoading: false };
    case FETCH_MOVIES_ERROR:
      return { ...state, isError: true, isLoading: false };
    case RESET_FETCH_MOVIES:
      return { ...state, isLoading: false, isError: false };
    default:
      return state;
  }
};
