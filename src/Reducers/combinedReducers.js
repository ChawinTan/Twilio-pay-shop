import { combineReducers } from "redux";

import apparelReducer from "./ApparelReducer";
import shoeReducer from "./ShoeReducer";
import gourmetReducer from "./GourmetReducer";

const combinedReducers = combineReducers({
  apparelReducer,
  shoeReducer,
  gourmetReducer
});

export default combinedReducers;
