import { createStore, applyMiddleware, compose } from "redux";
import { rootReducers } from "./reducers";
import thunk from "redux-thunk";
import { initialState } from "./state";

const configureStore = () => {
  if (process.env.stage) {
    return createStore(rootReducers, initialState, applyMiddleware(thunk));
  } else {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducers, initialState, composeEnhancers(applyMiddleware(thunk)));
  }
}

export const store = configureStore();
