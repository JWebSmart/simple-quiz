import { combineReducers } from "redux";
import userAnswers from "./userAnswers/reducer";
import correctAnswers from "./correctAnswers/reducer";
import quiz from "./quiz/reducer";

export const rootReducers = combineReducers({
  userAnswers,
  correctAnswers,
  quiz,
});
