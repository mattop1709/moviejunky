import { fetchTrivia } from "../api/trivia";

export const NAMESPACE = `trivia`;
export const FETCH_TRIVIA_QUESTIONS = `${NAMESPACE}/FETCH_TRIVIA_QUESTIONS`;
export const UPDATE_QUESTIONS_SUCCESS = `${NAMESPACE}/UPDATE_QUESTIONS_SUCCESS`;
export const UPDATE_QUESTIONS_ERROR = `${NAMESPACE}/UPDATE_QUESTIONS_ERROR`;

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const getTriviaQuestions = difficulty => async dispatch => {
  dispatch({ type: FETCH_TRIVIA_QUESTIONS });
  const response = await fetchTrivia(difficulty);

  if (response.length === 0) {
    dispatch({ type: UPDATE_QUESTIONS_ERROR });
    return;
  }

  if (typeof response === "object") {
    dispatch({ type: UPDATE_QUESTIONS_SUCCESS, payload: response });
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TRIVIA_QUESTIONS:
      return { ...initialState, isLoading: true };
    case UPDATE_QUESTIONS_SUCCESS:
      return { data: action.payload, isLoading: true, isError: false };
    case UPDATE_QUESTIONS_ERROR:
      return { ...initialState, isError: true };
    default:
      return state;
  }
};
