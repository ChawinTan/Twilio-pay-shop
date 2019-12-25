import instrumentReducer from "../Reducers/InstrumentReducer";

test("it should return default state", () => {
  const defaultReducer = instrumentReducer(undefined, {});

  expect(defaultReducer).toEqual([]);
});

test("it should return default state", () => {
  const defaultReducer = instrumentReducer([], {});

  expect(defaultReducer).toEqual([]);
});

test("it should remove product", () => {
  const state = [{ item: "item", price: 4, qty: 1 }];
  const action = {
    type: "REMOVE_INSTRUMENT",
    payload: { text: "item", price: 4 }
  };

  const updatedReducer = instrumentReducer(state, action);

  expect(updatedReducer.length).toEqual(0);
});

test("it should add product", () => {
  const state = [{ item: "item", price: 4, qty: 1 }];
  const action = {
    type: "ADD_INSTRUMENT",
    payload: { quantity: 2, selected: { text: "item2", price: 4 } }
  };

  const updatedReducer = instrumentReducer(state, action);

  expect(updatedReducer.length).toEqual(2);
});
