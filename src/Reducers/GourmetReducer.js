import { removeProduct, addProduct } from "./commonFunc";

const gourmetReducer = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_GOURMET":
      const updatedStateRemove = removeProduct([...state], action.payload);
      return [...updatedStateRemove];
    case "ADD_GOURMET":
      const updatedStateAdd = addProduct([...state], action.payload);
      return [...updatedStateAdd];
    default:
      return state;
  }
};

export default gourmetReducer;
