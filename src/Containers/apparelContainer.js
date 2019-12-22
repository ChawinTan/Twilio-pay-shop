import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Apparel from "../Components/Apparel";
import { removeProduct, addProduct } from "../Actions/ProductActions";

export const mapStateToProps = state => {
  return {
    apparel: state.apparelReducer
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    addProduct: (type, selectedProduct) => {
      dispatch(addProduct(type, selectedProduct));
    },
    removeProduct: (type, selectedProduct) => {
      dispatch(removeProduct(type, selectedProduct));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Apparel)
);
