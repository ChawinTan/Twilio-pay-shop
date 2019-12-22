import { combineReducers } from "redux";

import apparelReducer from "./ApparelReducer";

const combinedReducers = combineReducers({
  apparelReducer
});

export default combinedReducers;
