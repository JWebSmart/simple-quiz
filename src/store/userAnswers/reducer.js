import { RESET_USER_ANSWER, SET_USER_ANSWER } from "../../constants/actions/userAnswers";
import { initialState } from "../state";

export default function userAnswers(state = initialState.userAnswers, action) {
  switch (action.type) {
    case SET_USER_ANSWER:
      state[action.payload.problemNumber] = action.payload.answer;
      return [...state];
    case RESET_USER_ANSWER:
      return [];
    default:
      return state;
  }
}
