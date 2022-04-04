import { createSelector } from "reselect";
import { getState } from "../selectors";

export const getCorrectAnswers = createSelector(getState, state => state.correctAnswers);
