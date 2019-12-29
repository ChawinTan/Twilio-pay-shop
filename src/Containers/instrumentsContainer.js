import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Instruments from "../Components/Instruments";
import { removeProduct, addProduct } from "../Actions/ProductActions";
import { subscribeProduct } from "../Actions/SubscribeActions";

export const mapStateToProps = state => {
  return {
    instrument: state.instrumentReducer
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    addProduct: (type, selectedProduct) => {
      dispatch(addProduct(type, selectedProduct));
    },
    removeProduct: (type, selectedProduct) => {
      dispatch(removeProduct(type, selectedProduct));
    },
    subscribeProduct: (type, subscribe) => {
      dispatch(subscribeProduct(type, subscribe));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Instruments)
);
