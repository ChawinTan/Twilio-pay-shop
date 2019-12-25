import gourmetReducer from "../Reducers/GourmetReducer";

test("it should return default state", () => {
  const defaultReducer = gourmetReducer(undefined, {});

  expect(defaultReducer).toEqual([]);
});

test("it should return default state", () => {
  const defaultReducer = gourmetReducer([], {});

  expect(defaultReducer).toEqual([]);
});

test("it should remove product", () => {
  const state = [{ item: "item", price: 4, qty: 1 }];
  const action = {
    type: "REMOVE_GOURMET",
    payload: { text: "item", price: 4 }
  };

  const updatedReducer = gourmetReducer(state, action);

  expect(updatedReducer.length).toEqual(0);
});

test("it should add product", () => {
  const state = [{ item: "item", price: 4, qty: 1 }];
  const action = {
    type: "ADD_GOURMET",
    payload: { quantity: 2, selected: { text: "item2", price: 4 } }
  };

  const updatedReducer = gourmetReducer(state, action);

  expect(updatedReducer.length).toEqual(2);
});
