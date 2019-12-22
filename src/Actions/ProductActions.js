export function removeProduct(type, selectedProduct) {
  return {
    type,
    payload: selectedProduct
  };
}

export function addProduct(type, selectedProduct) {
  return {
    type,
    payload: selectedProduct
  };
}
