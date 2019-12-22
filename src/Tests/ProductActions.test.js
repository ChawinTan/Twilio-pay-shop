import { addProduct, removeProduct } from "../Actions/ProductActions";

test("it should return respective action objects", () => {
  const testObj = {};
  const addProductTest = addProduct(testObj);
  const removeProductTest = removeProduct(testObj);

  expect(addProductTest).toEqual({ type: "ADD_PRODUCT", payload: testObj });
  expect(removeProductTest).toEqual({
    type: "REMOVE_PRODUCT",
    payload: testObj
  });
});
