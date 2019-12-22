import { addProduct, removeProduct } from "../Reducers/commonFunc";

test("it should update existing product", () => {
  const testProduct = [
    { item: "item", price: 4, qty: 1 },
    { item: "item2", price: 4, qty: 1 }
  ];
  const testSelectedProduct = {
    quantity: 2,
    selected: { text: "item", price: 4 }
  };

  const updateProduct = addProduct(testProduct, testSelectedProduct);

  expect(updateProduct.length).toEqual(2);
  expect(updateProduct[0].qty).toEqual(testSelectedProduct.quantity);
});

test("it should add new product", () => {
  const testProduct = [{ item: "item", price: 4, qty: 1 }];
  const testSelectedProduct = {
    quantity: 2,
    selected: { text: "diffItem", price: 5 }
  };

  const updateProduct = addProduct(testProduct, testSelectedProduct);

  expect(updateProduct.length).toEqual(2);
});

test("it should remove existing product", () => {
  const testProduct = [
    { item: "item", price: 4, qty: 1 },
    { item: "item2", price: 4, qty: 1 }
  ];
  const testSelectedProduct = { text: "item", price: 4 };

  const updateProduct = removeProduct(testProduct, testSelectedProduct);

  expect(updateProduct.length).toEqual(1);
});

test("it should not remove any product", () => {
  const testProduct = [];
  const testSelectedProduct = { text: "item", price: 4 };

  const updateProduct = removeProduct(testProduct, testSelectedProduct);

  expect(updateProduct.length).toEqual(0);
});
