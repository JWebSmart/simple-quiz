import { createSelector } from "reselect";
import { getState } from "../selectors";

export const getUserAnswers = createSelector(getState, state => state.userAnswers);
