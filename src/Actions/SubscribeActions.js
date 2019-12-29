export function subscribeProduct(type, subscribe) {
  return {
    type,
    payload: subscribe
  };
}
