export const removeProduct = (product, selectedProduct) => {
  if (product.length > 0) {
    const updatedProduct = product.filter(item => {
      if (item.item !== selectedProduct.text) {
        return item;
      }
    });
    return updatedProduct;
  }
  return product;
};

export const addProduct = (product, selectedProduct) => {
  if (
    product.length > 0 &&
    product.some(item => item.item === selectedProduct.selected.text)
  ) {
    const updatedProduct = product.map(item => {
      if (item.item === selectedProduct.selected.text) {
        return { ...item, qty: selectedProduct.quantity };
      }
      return item;
    });
    return updatedProduct;
  } else {
    const newProduct = {
      item: selectedProduct.selected.text,
      price: selectedProduct.selected.price,
      qty: selectedProduct.quantity
    };
    const updatedProduct = [...product, newProduct];
    return updatedProduct;
  }
};
