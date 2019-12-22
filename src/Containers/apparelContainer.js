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
    addProduct: selectedProduct => {
      dispatch(addProduct(selectedProduct));
    },
    removeProduct: selectedProduct => {
      dispatch(removeProduct(selectedProduct));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Apparel)
);
