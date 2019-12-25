import shoeReducer from "../Reducers/ShoeReducer";

test("it should return default state", () => {
  const defaultReducer = shoeReducer(undefined, {});

  expect(defaultReducer).toEqual([]);
});

test("it should return default state", () => {
  const defaultReducer = shoeReducer([], {});

  expect(defaultReducer).toEqual([]);
});

test("it should remove product", () => {
  const state = [{ item: "item", price: 4, qty: 1 }];
  const action = {
    type: "REMOVE_SHOE",
    payload: { text: "item", price: 4 }
  };

  const updatedReducer = shoeReducer(state, action);

  expect(updatedReducer.length).toEqual(0);
});

test("it should add product", () => {
  const state = [{ item: "item", price: 4, qty: 1 }];
  const action = {
    type: "ADD_SHOE",
    payload: { quantity: 2, selected: { text: "item2", price: 4 } }
  };

  const updatedReducer = shoeReducer(state, action);

  expect(updatedReducer.length).toEqual(2);
});
