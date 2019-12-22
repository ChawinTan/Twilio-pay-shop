import { removeProduct, addProduct } from "./commonFunc";

const apparelReducer = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_PRODUCT":
      const updatedStateRemove = removeProduct([...state], action.payload);
      return [...updatedStateRemove];
    case "ADD_PRODUCT":
      const updatedStateAdd = addProduct([...state], action.payload);
      return [...updatedStateAdd];
    default:
      return state;
  }
};

export default apparelReducer;
