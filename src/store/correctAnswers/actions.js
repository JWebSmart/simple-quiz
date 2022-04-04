import * as correctAnswer from "../../constants/actions/correctAnswers";

export const getCorrectAnswerSuccess = response => {
  const payload = response.map(answer => answer.correct_answer);
  return {
    type: correctAnswer.GET_CORRECT_ANSWERS_SUCCESS,
    payload,
  };
};
