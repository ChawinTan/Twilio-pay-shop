import apparelReducer from "../Reducers/ApparelReducer";

test("it should return default state", () => {
  const defaultReducer = apparelReducer(undefined, {});

  expect(defaultReducer).toEqual([]);
});

test("it should return default state", () => {
  const defaultReducer = apparelReducer([], {});

  expect(defaultReducer).toEqual([]);
});

test("it should remove product", () => {
  const state = [{ item: "item", price: 4, qty: 1 }];
  const action = {
    type: "REMOVE_APPAREL",
    payload: { text: "item", price: 4 }
  };

  const updatedReducer = apparelReducer(state, action);

  expect(updatedReducer.length).toEqual(0);
});

test("it should add product", () => {
  const state = [{ item: "item", price: 4, qty: 1 }];
  const action = {
    type: "ADD_APPAREL",
    payload: { quantity: 2, selected: { text: "item2", price: 4 } }
  };

  const updatedReducer = apparelReducer(state, action);

  expect(updatedReducer.length).toEqual(2);
});
