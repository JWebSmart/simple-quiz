import * as userAnswer from "../../constants/actions/userAnswers";

export const setUserAnswer = payload => ({
  type: userAnswer.SET_USER_ANSWER,
  payload,
});

export const resetUserAnswer = payload => ({
  type: userAnswer.RESET_USER_ANSWER,
});
