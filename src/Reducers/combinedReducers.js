import { combineReducers } from "redux";

import apparelReducer from "./ApparelReducer";
import shoeReducer from "./ShoeReducer";
import gourmetReducer from "./GourmetReducer";
import instrumentReducer from "./InstrumentReducer";

const combinedReducers = combineReducers({
  apparelReducer,
  shoeReducer,
  gourmetReducer,
  instrumentReducer
});

export default combinedReducers;
