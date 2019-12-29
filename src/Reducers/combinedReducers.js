import { combineReducers } from "redux";

import apparelReducer from "./ApparelReducer";
import shoeReducer from "./ShoeReducer";
import gourmetReducer from "./GourmetReducer";
import instrumentReducer from "./InstrumentReducer";
import subscribeReducer from "./SubscribeReducer";

const combinedReducers = combineReducers({
  apparelReducer,
  shoeReducer,
  gourmetReducer,
  instrumentReducer,
  subscribeReducer
});

export default combinedReducers;
