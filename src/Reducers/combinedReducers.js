import { combineReducers } from "redux";

import apparelReducer from "./ApparelReducer";
import shoeReducer from "./ShoeReducer";

const combinedReducers = combineReducers({
  apparelReducer,
  shoeReducer
});

export default combinedReducers;
