const initialState = {
  apparel: false,
  gourmet: false,
  instrument: false,
  shoe: false
};

const subscribeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APPAREL_SUBSCRIBE":
      return { ...state, apparel: action.payload };
    case "APPAREL_UNSUBSCRIBE":
      return { ...state, apparel: action.payload };
    case "GOURMET_SUBSCRIBE":
      return { ...state, gourmet: action.payload };
    case "GOURMET_UNSUBSCRIBE":
      return { ...state, gourmet: action.payload };
    case "INSTRUMENT_SUBSCRIBE":
      return { ...state, instrument: action.payload };
    case "INSTRUMENT_UNSUBSCRIBE":
      return { ...state, instrument: action.payload };
    case "SHOE_SUBSCRIBE":
      return { ...state, shoe: action.payload };
    case "SHOE_UNSUBSCRIBE":
      return { ...state, shoe: action.payload };
    default:
      return state;
  }
};

export default subscribeReducer;
