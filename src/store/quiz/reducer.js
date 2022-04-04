import { GET_QUIZ_FAILED, GET_QUIZ_REQUEST, GET_QUIZ_SUCCESS } from "../../constants/actions/quiz";
import { initialState } from "../state";

export default function quiz(state = initialState.quiz, action) {
  switch (action.type) {
    case GET_QUIZ_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_QUIZ_SUCCESS: {
      return {
        problems: [...action.payload],
        isLoading: false,
      };
    }
    case GET_QUIZ_FAILED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: {
      return state;
    }
  }
}
