import { fetchMovies } from "../api/movies";

export const NAMESPACE = `movies`;
export const INITIATE_FETCH_MOVIES = `${NAMESPACE}/INITIATE_FETCH_MOVIES`;
export const FETCH_MOVIES_SUCCESS = `${NAMESPACE}/FETCH_MOVIES_SUCCESS`;
export const FETCH_MOVIES_ERROR = `${NAMESPACE}/FETCH_MOVIES_ERROR`;

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

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INITIATE_FETCH_MOVIES:
      return { ...initialState, isLoading: true };
    case FETCH_MOVIES_SUCCESS:
      return { ...state, lists: action.payload, isLoading: false };
    case FETCH_MOVIES_ERROR:
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};
