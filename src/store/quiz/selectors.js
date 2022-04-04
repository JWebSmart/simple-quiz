import { createSelector } from "reselect";
import { getState } from "../selectors";

export const getProblems = createSelector(getState, state => state.quiz.problems);
export const isLoadingQuiz = createSelector(getState, state => state.quiz.isLoading);
