import { GET_QUIZ_FAILED, GET_QUIZ_REQUEST, GET_QUIZ_SUCCESS } from "../../constants/actions/quiz";

export const getQuizRequest = () => ({ type: GET_QUIZ_REQUEST });

export const getQuizSuccess = payload => ({
  type: GET_QUIZ_SUCCESS,
  payload,
});

export const getQuizFailed = () => ({ type: GET_QUIZ_FAILED });
