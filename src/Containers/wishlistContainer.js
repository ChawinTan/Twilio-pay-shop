import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import WishList from "../Components/WishList";

export const mapStateToProps = state => {
  return {};
};

export const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(WishList)
);
