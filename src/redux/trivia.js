import { fetchTrivia } from "../api/trivia";
import Trivia from "../utils/trivia";

export const NAMESPACE = `trivia`;
export const FETCH_TRIVIA_QUESTIONS = `${NAMESPACE}/FETCH_TRIVIA_QUESTIONS`;
export const UPDATE_QUESTIONS_SUCCESS = `${NAMESPACE}/UPDATE_QUESTIONS_SUCCESS`;
export const UPDATE_QUESTIONS_ERROR = `${NAMESPACE}/UPDATE_QUESTIONS_ERROR`;
export const SET_DIFFICULTY = `${NAMESPACE}/SET_DIFFICULTY`;
export const RESET_TRIVIA = `${NAMESPACE}/RESET_TRIVIA`;

const initialState = {
  data: [],
  difficulty: "hard",
  isLoading: false,
  isError: false,
};

export const getTriviaQuestions = () => async (dispatch, getState) => {
  const { difficulty } = getState().trivia;
  dispatch({ type: FETCH_TRIVIA_QUESTIONS });
  const response = await fetchTrivia(difficulty);

  if (response.length === 0) {
    dispatch({ type: UPDATE_QUESTIONS_ERROR });
    return;
  }

  if (typeof response === "object") {
    let stack = [];
    response.forEach(trivia => {
      const triviaObj = new Trivia([
        ...trivia.incorrect_answers,
        trivia.correct_answer,
      ]);
      const answers = triviaObj.shuffledAnswers;
      stack.push({ ...trivia, answers });
    });
    dispatch({ type: UPDATE_QUESTIONS_SUCCESS, payload: stack });
  }
};

export const setTriviaDifficulty = difficulty => {
  return { type: SET_DIFFICULTY, payload: difficulty };
};

export const resetTrivia = () => {
  return { type: RESET_TRIVIA };
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_TRIVIA_QUESTIONS:
      return { ...initialState, isLoading: true };
    case UPDATE_QUESTIONS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case UPDATE_QUESTIONS_ERROR:
      return { ...initialState, isError: true };
    case SET_DIFFICULTY:
      return { ...initialState, difficulty: action.payload };
    case RESET_TRIVIA:
      return initialState;
    default:
      return state;
  }
};
