export function removeProduct(selectedProduct) {
  return {
    type: "REMOVE_PRODUCT",
    payload: selectedProduct
  };
}

export function addProduct(selectedProduct) {
  return {
    type: "ADD_PRODUCT",
    payload: selectedProduct
  };
}
