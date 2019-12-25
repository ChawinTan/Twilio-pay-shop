import { removeProduct, addProduct } from "./commonFunc";

const instrumentReducer = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_INSTRUMENT":
      const updatedStateRemove = removeProduct([...state], action.payload);
      return [...updatedStateRemove];
    case "ADD_INSTRUMENT":
      const updatedStateAdd = addProduct([...state], action.payload);
      return [...updatedStateAdd];
    default:
      return state;
  }
};

export default instrumentReducer;
