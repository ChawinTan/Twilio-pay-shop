import subscribeReducer from "../Reducers/SubscribeReducer";

const initialState = {
  apparel: false,
  gourmet: false,
  instrument: false,
  shoe: false
};

test("it should return default state", () => {
  const defaultReducer = subscribeReducer(undefined, {});

  expect(defaultReducer).toEqual(initialState);
});

test("it should return default state", () => {
  const defaultReducer = subscribeReducer(initialState, {});

  expect(defaultReducer).toEqual(initialState);
});

test("it should return true for apparel", () => {
  const action = { type: "APPAREL_SUBSCRIBE", payload: true };

  const updateState = subscribeReducer(initialState, action);

  expect(updateState.apparel).toEqual(true);
});

test("it should return false for apparel", () => {
  const action = { type: "APPAREL_UNSUBSCRIBE", payload: false };

  const updateState = subscribeReducer(initialState, action);

  expect(updateState.apparel).toEqual(false);
});

test("it should return true for gourmet", () => {
  const action = { type: "GOURMET_SUBSCRIBE", payload: true };

  const updateState = subscribeReducer(initialState, action);

  expect(updateState.gourmet).toEqual(true);
});

test("it should return false for gourmet", () => {
  const action = { type: "GOURMET_UNSUBSCRIBE", payload: false };

  const updateState = subscribeReducer(initialState, action);

  expect(updateState.gourmet).toEqual(false);
});

test("it should return true for instrument", () => {
  const action = { type: "INSTRUMENT_SUBSCRIBE", payload: true };

  const updateState = subscribeReducer(initialState, action);

  expect(updateState.instrument).toEqual(true);
});

test("it should return false for instrument", () => {
  const action = { type: "INSTRUMENT_UNSUBSCRIBE", payload: false };

  const updateState = subscribeReducer(initialState, action);

  expect(updateState.instrument).toEqual(false);
});

test("it should return true for shoe", () => {
  const action = { type: "SHOE_SUBSCRIBE", payload: true };

  const updateState = subscribeReducer(initialState, action);

  expect(updateState.shoe).toEqual(true);
});

test("it should return false for shoe", () => {
  const action = { type: "SHOE_UNSUBSCRIBE", payload: false };

  const updateState = subscribeReducer(initialState, action);

  expect(updateState.shoe).toEqual(false);
});
