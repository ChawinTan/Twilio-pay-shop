import { removeProduct, addProduct } from "./commonFunc";

const shoeReducer = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_SHOE":
      const updatedStateRemove = removeProduct([...state], action.payload);
      return [...updatedStateRemove];
    case "ADD_SHOE":
      const updatedStateAdd = addProduct([...state], action.payload);
      return [...updatedStateAdd];
    default:
      return state;
  }
};

export default shoeReducer;
