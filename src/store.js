import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import combinedReducers from "./Reducers/combinedReducers";
import { loadState } from "./PersistingStates";

export default createStore(
  combinedReducers,
  loadState(),
  applyMiddleware(createLogger(), thunk)
);
