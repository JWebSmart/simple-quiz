import { GET_CORRECT_ANSWERS_SUCCESS } from "../../constants/actions/correctAnswers";
import { initialState } from "../state";

export default function correctAnswers(state = initialState.correctAnswers, action) {
  switch (action.type) {
    case GET_CORRECT_ANSWERS_SUCCESS: {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
}
