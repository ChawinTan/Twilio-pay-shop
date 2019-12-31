import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import WishList from "../Components/WishList";

export const mapStateToProps = state => {
  return {
    wishlist: state.subscribeReducer
  };
};

export default withRouter(connect(mapStateToProps, null)(WishList));
